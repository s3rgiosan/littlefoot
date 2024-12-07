<?php
/**
 * Plugin Name:       Littlefoot for Footnotes
 * Description:       Elegant, interactive popups for the Footnotes block.
 * Plugin URI:        https://github.com/s3rgiosan/littlefoot
 * Requires at least: 6.4
 * Requires PHP:      7.4
 * Version:           1.4.0
 * Author:            Sérgio Santos
 * Author URI:        https://s3rgiosan.dev/?utm_source=wp-plugins&utm_medium=littlefoot&utm_campaign=author-uri
 * License:           MIT
 * License URI:       https://opensource.org/license/mit/
 * Text Domain:       littlefoot
 *
 * @package           Littlefoot
 */

namespace S3S\WP\Littlefoot;

use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

define( 'S3S_LITTLEFOOT_PATH', plugin_dir_path( __FILE__ ) );
define( 'S3S_LITTLEFOOT_URL', plugin_dir_url( __FILE__ ) );

if ( file_exists( S3S_LITTLEFOOT_PATH . 'vendor/autoload.php' ) ) {
	require_once S3S_LITTLEFOOT_PATH . 'vendor/autoload.php';
}

PucFactory::buildUpdateChecker(
	'https://github.com/s3rgiosan/littlefoot/',
	__FILE__,
	'littlefoot'
)->setBranch( 'main' );

/**
 * Register assets.
 *
 * @return void
 */
function enqueue_assets() {

	$scripts = [
		'editor-script' => 'index',
		'view-script'   => 'view',
	];

	foreach ( $scripts as $asset_handle => $filename ) {

		$asset_file = sprintf(
			'%s/build/%s.asset.php',
			untrailingslashit( S3S_LITTLEFOOT_PATH ),
			$filename
		);

		$asset        = file_exists( $asset_file ) ? require $asset_file : null;
		$dependencies = isset( $asset['dependencies'] ) ? $asset['dependencies'] : [];
		$version      = isset( $asset['version'] ) ? $asset['version'] : filemtime( $asset_file );

		wp_register_script(
			"littlefoot-$asset_handle",
			sprintf(
				'%s/build/%s.js',
				untrailingslashit( S3S_LITTLEFOOT_URL ),
				$filename
			),
			$dependencies,
			$version,
			true
		);
	}

	$styles = [
		'style' => 'style-index',
	];

	foreach ( $styles as $asset_handle => $filename ) {

		$asset_file = sprintf(
			'%s/build/%s.css',
			untrailingslashit( S3S_LITTLEFOOT_PATH ),
			$filename
		);

		wp_register_style(
			"littlefoot-$asset_handle",
			sprintf(
				'%s/build/%s.css',
				untrailingslashit( S3S_LITTLEFOOT_URL ),
				$filename
			),
			[],
			filemtime( $asset_file )
		);
	}
}

add_action( 'enqueue_block_assets', __NAMESPACE__ . '\enqueue_assets' );

/**
 * Updates the Footnotes block to use littlefoot.
 *
 * @param  array $metadata Metadata for registering a block type.
 * @return array
 */
function footnotes_block_metadata( $metadata ) {

	if ( empty( $metadata['name'] ) ) {
		return $metadata;
	}

	if ( 'core/footnotes' !== $metadata['name'] ) {
		return $metadata;
	}

	$field_mappings = [
		'editorScript' => 'editor-script',
		'viewScript'   => 'view-script',
		'style'        => 'style',
	];

	foreach ( $field_mappings as $field_name => $asset_handle ) {

		if ( ! isset( $metadata[ $field_name ] ) ) {
			$metadata[ $field_name ] = [];
		}

		if ( ! is_array( $metadata[ $field_name ] ) ) {
			$metadata[ $field_name ] = [ $metadata[ $field_name ] ];
		}

		$metadata[ $field_name ][] = "littlefoot-$asset_handle";
	}

	return $metadata;
}

add_filter( 'block_type_metadata', __NAMESPACE__ . '\footnotes_block_metadata' );

/**
 * Add littlefoot options as a `data-littlefoot` attribute.
 *
 * @param  string $block_content The block content.
 * @param  array  $block         The full block, including name and attributes.
 * @return string
 */
function render_footnotes_block( $block_content, $block ) {

	$tags = new \WP_HTML_Tag_Processor( $block_content );
	if ( $tags->next_tag( [ 'class_name' => 'wp-block-footnotes' ] ) ) {
		$tags->set_attribute( 'data-littlefoot', wp_json_encode( $block['attrs'] ) );
		$block_content = $tags->get_updated_html();
	}

	return $block_content;
}

add_filter( 'render_block_core/footnotes', __NAMESPACE__ . '\render_footnotes_block', 10, 2 );
