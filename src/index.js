/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, ToggleControl, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 *  Internal dependencies
 */
import './style.css';

const addAttributes = (settings, name) => {
	if (name !== 'core/footnotes') {
		return settings;
	}

	return {
		...settings,
		attributes: {
			...settings.attributes,
			...{
				allowDuplicates: {
					type: 'boolean',
					default: false,
				},
				allowMultiple: {
					type: 'boolean',
					default: false,
				},
				dismissOnUnhover: {
					type: 'boolean',
					default: false,
				},
				activateDelay: {
					type: 'integer',
					default: 100,
				},
				dismissDelay: {
					type: 'integer',
					default: 500,
				},
				hoverDelay: {
					type: 'integer',
					default: 250,
				},
			},
		},
	};
};
addFilter('blocks.registerBlockType', 'littlefoot/addAttributes', addAttributes);

const addInspectorControls = (BlockEdit) => (props) => {
	const { name, attributes, setAttributes } = props;
	const {
		allowDuplicates,
		allowMultiple,
		dismissOnUnhover,
		activateDelay,
		dismissDelay,
		hoverDelay,
	} = attributes;

	if (name !== 'core/footnotes') {
		return <BlockEdit {...props} />;
	}

	return (
		<>
			<BlockEdit {...props} />
			<InspectorControls>
				<PanelBody title={__('Littlefoot Options', 'wp-littlefoot')}>
					<PanelRow>
						<ToggleControl
							label={__('Allow duplicates', 'wp-littlefoot')}
							checked={allowDuplicates}
							onChange={(value) => setAttributes({ allowDuplicates: value })}
							help={__(
								'Determines whether or not a footnote can be used as the content for multiple footnote buttons.',
								'wp-littelfoot',
							)}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Allow multiple', 'wp-littlefoot')}
							checked={allowMultiple}
							onChange={(value) => setAttributes({ allowMultiple: value })}
							help={__(
								'Specifies whether or not multiple footnote popovers can be active simultaneously.',
								'wp-littelfoot',
							)}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Dismiss on unhover', 'wp-littlefoot')}
							checked={dismissOnUnhover}
							onChange={(value) => setAttributes({ dismissOnUnhover: value })}
							help={__(
								'Determines whether footnotes that were presented when hovering on a footnote button are dismissed once the footnote button or footnote popover is un-hovered.',
								'wp-littelfoot',
							)}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							label={__('Activate Delay', 'wp-littlefoot')}
							value={activateDelay}
							onChange={(value) => setAttributes({ activateDelay: value })}
							min={0}
							max={1000}
							help={__(
								'Sets a delay between the activation of the footnote button and the activation of the actual footnote content.',
								'wp-littlefoot',
							)}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							label={__('Dismiss Delay', 'wp-littlefoot')}
							value={dismissDelay}
							onChange={(value) => setAttributes({ dismissDelay: value })}
							min={0}
							max={1000}
							help={__(
								'When the footnote content is being removed this option specifies how long after the active class is removed from the footnote before the element is actually removed from the DOM.',
								'wp-littlefoot',
							)}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							label={__('Hover Delay', 'wp-littlefoot')}
							value={hoverDelay}
							onChange={(value) => setAttributes({ hoverDelay: value })}
							min={0}
							max={1000}
							help={__(
								'Specifies the amount of time (in milliseconds) that must pass after the footnote button/content is un-hovered before the footnote is dismissed.',
								'wp-littlefoot',
							)}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</>
	);
};
addFilter('editor.BlockEdit', 'littlefoot/addInspectorControls', addInspectorControls);
