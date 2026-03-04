<?php
/**
 * Plugin Name:       Littlefoot for Footnotes
 * Description:       Elegant, interactive popups for the Footnotes block.
 * Plugin URI:        https://github.com/s3rgiosan/littlefoot
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Version:           1.7.0
 * Author:            Sérgio Santos
 * Author URI:        https://s3rgiosan.dev/?utm_source=wp-plugins&utm_medium=littlefoot&utm_campaign=author-uri
 * License:           MIT
 * License URI:       https://opensource.org/license/mit/
 * Update URI:        https://s3rgiosan.dev/
 * GitHub Plugin URI: https://github.com/s3rgiosan/littlefoot
 * Text Domain:       littlefoot
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
);

( Plugin::get_instance() )->setup();
