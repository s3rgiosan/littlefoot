<?php
/**
 * Plugin Name:       littlefoot
 * Description:       Footnotes without the footprint.
 * Plugin URI:        https://github.com/s3rgiosan/wp-littlefoot
 * Requires at least: 6.1
 * Requires PHP:      7.4
 * Version:           0.1.0
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
 * Enqueue assets.
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
 * Updates the Footnotes block to use littlefoot.js.
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
