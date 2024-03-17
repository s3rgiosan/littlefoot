# littlefoot

> Elegant, interactive popups for the Footnotes block.

## Description

Elevate your website's user experience by incorporating lightweight and visually appealing footnotes using [littlefoot](https://github.com/goblindegook/littlefoot).
This WordPress plugin extends the WordPress Footnotes block functionality by leveraging littlefoot.

![Footnotes with littlefoot](assets/screenshot-1.gif)

## Requirements

* PHP 7.4+
* WordPress 6.4

## Installation

`composer require s3rgiosan/littlefoot`

1. Download and extract the [.zip file](https://github.com/s3rgiosan/littlefoot/archive/refs/heads/main.zip).
2. Install the plugin via the plugin installer by uploading the .zip file.
3. Activate the plugin.

## Usage

This plugin requires no configuration.

## Options

### `activateDelay`

Sets a delay between the activation of the footnote button and the activation of the actual footnote content.

Default: `100`

### `allowDuplicates`

Determines whether or not a footnote can be used as the content for multiple footnote buttons.

Default: `false`

### `allowMultiple`

Specifies whether or not multiple footnote popovers can be active simultaneously.

Default: `false`

### `dismissDelay`

When the footnote content is being removed this option specifies how long after the active class is removed from the footnote before the element is actually removed from the DOM.

Default: `500`

### `dismissOnUnhover`

Determines whether footnotes that were presented when hovering on a footnote button are dismissed once the footnote button or footnote popover is un-hovered.

Default: `false`

### `hoverDelay`

Specifies the amount of time (in milliseconds) that must pass after the footnote button/content is un-hovered before the footnote is dismissed.

Default: `250`

## Styling

See [littlefoot.js theming](https://github.com/goblindegook/littlefoot/blob/main/README.md#theming) section.

## Changelog

A complete listing of all notable changes to this project are documented in [CHANGELOG.md](https://github.com/s3rgiosan/littlefoot/blob/main/CHANGELOG.md).
