<?php

namespace S3S\WP\Littlefoot;

class Plugin {

	/**
	 * Plugin singleton instance.
	 *
	 * @var Plugin $instance Plugin Singleton instance
	 */
	public static $instance = null;

	/**
	 * Get the singleton instance.
	 *
	 * @return Plugin
	 */
	public static function get_instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Setup hooks.
	 */
	public function setup() {
		add_action( 'init', [ $this, 'load_textdomain' ] );
		add_action( 'enqueue_block_assets', [ $this, 'enqueue_assets' ] );
		add_filter( 'block_type_metadata', [ $this, 'block_metadata' ] );
		add_filter( 'render_block_core/footnotes', [ $this, 'render_block' ], 10, 2 );
	}

	/**
	 * Load plugin textdomain.
	 *
	 * @return void
	 */
	public function load_textdomain() {
		load_plugin_textdomain( 'littlefoot', false, dirname( plugin_basename( S3S_LITTLEFOOT_PATH . 'plugin.php' ) ) . '/languages' );
	}

	/**
	 * Register assets for the block.
	 *
	 * @return void
	 */
	public function enqueue_assets() {

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

	/**
	 * Update the metadata for the Footnotes block.
	 *
	 * @param  array $metadata Metadata for registering a block type.
	 * @return array
	 */
	public function block_metadata( $metadata ) {

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

	/**
	 * Sanitize littlefoot block attributes.
	 *
	 * @param  array $attrs The block attributes.
	 * @return array
	 */
	public function sanitize_block_attrs( $attrs ) {
		$schema = [
			'allowDuplicates'  => [
				'type'    => 'boolean',
				'default' => false,
			],
			'allowMultiple'    => [
				'type'    => 'boolean',
				'default' => false,
			],
			'dismissOnUnhover' => [
				'type'    => 'boolean',
				'default' => false,
			],
			'activateDelay'    => [
				'type'    => 'integer',
				'default' => 100,
				'min'     => 0,
				'max'     => 1000,
			],
			'dismissDelay'     => [
				'type'    => 'integer',
				'default' => 500,
				'min'     => 0,
				'max'     => 1000,
			],
			'hoverDelay'       => [
				'type'    => 'integer',
				'default' => 250,
				'min'     => 0,
				'max'     => 1000,
			],
		];

		$sanitized = [];

		foreach ( $schema as $key => $config ) {
			if ( ! array_key_exists( $key, $attrs ) ) {
				continue;
			}

			$value = $attrs[ $key ];

			if ( 'boolean' === $config['type'] ) {
				$sanitized[ $key ] = (bool) $value;
			} elseif ( 'integer' === $config['type'] ) {
				$value             = (int) $value;
				$value             = max( $config['min'], min( $config['max'], $value ) );
				$sanitized[ $key ] = $value;
			}
		}

		return $sanitized;
	}

	/**
	 * Add littlefoot options as a `data-littlefoot` attribute.
	 *
	 * @param  string $block_content The block content.
	 * @param  array  $block         The full block, including name and attributes.
	 * @return string
	 */
	public function render_block( $block_content, $block ) {

		$attrs = $this->sanitize_block_attrs( $block['attrs'] );

		$tags = new \WP_HTML_Tag_Processor( $block_content );
		if ( $tags->next_tag( [ 'class_name' => 'wp-block-footnotes' ] ) ) {
			$tags->set_attribute( 'data-littlefoot', wp_json_encode( $attrs ) );
			$block_content = $tags->get_updated_html();
		}

		return $block_content;
	}
}
