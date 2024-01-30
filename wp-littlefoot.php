<?php
/**
 * Plugin Name:       littlefoot
 * Description:       Elegant, interactive popups for the Footnotes block.
 * Plugin URI:        https://github.com/s3rgiosan/wp-littlefoot
 * Requires at least: 6.1
 * Requires PHP:      7.4
 * Version:           1.0.0
 * Author:            Sérgio Santos
 * Author URI:        https://s3rgiosan.dev/?utm_source=wp-plugins&utm_medium=wp-littlefoot&utm_campaign=author-uri
 * License:           MIT
 * License URI:       https://opensource.org/license/mit/
 * Update URI:        https://github.com/s3rgiosan/wp-littlefoot
 * Text Domain:       wp-littlefoot
 *
 * @package           s3rgiosan/wp-littlefoot
 */

namespace s3rgiosan\Littlefoot;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

define( 'WP_LITTLEFOOT_PATH', plugin_dir_path( __FILE__ ) );
define( 'WP_LITTLEFOOT_URL', plugin_dir_url( __FILE__ ) );

if ( file_exists( WP_LITTLEFOOT_PATH . 'vendor/autoload.php' ) ) {
	require_once WP_LITTLEFOOT_PATH . 'vendor/autoload.php';
}

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
			untrailingslashit( WP_LITTLEFOOT_PATH ),
			$filename
		);

		$asset        = file_exists( $asset_file ) ? require $asset_file : null;
		$dependencies = isset( $asset['dependencies'] ) ? $asset['dependencies'] : [];
		$version      = isset( $asset['version'] ) ? $asset['version'] : filemtime( $asset_file );

		wp_register_script(
			"wp-littlefoot-$asset_handle",
			sprintf(
				'%s/build/%s.js',
				untrailingslashit( WP_LITTLEFOOT_URL ),
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
			untrailingslashit( WP_LITTLEFOOT_PATH ),
			$filename
		);

		wp_register_style(
			"wp-littlefoot-$asset_handle",
			sprintf(
				'%s/build/%s.css',
				untrailingslashit( WP_LITTLEFOOT_URL ),
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

		$metadata[ $field_name ][] = "wp-littlefoot-$asset_handle";
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

	$is_enabled = $block['attrs']['isLittlefootEnabled'] ?? false;

	if ( ! $is_enabled ) {
		return $block_content;
	}

	$tags = new \WP_HTML_Tag_Processor( $block_content );
	if ( $tags->next_tag( [ 'class_name' => 'wp-block-footnotes' ] ) ) {
		$tags->set_attribute( 'data-littlefoot', wp_json_encode( $block['attrs'] ) );
		$block_content = $tags->get_updated_html();
	}

	return $block_content;
}
add_filter( 'render_block_core/footnotes', __NAMESPACE__ . '\render_footnotes_block', 10, 2 );
