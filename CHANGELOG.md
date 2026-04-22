# Changelog

All notable changes to this project will be documented in this file, per [the Keep a Changelog standard](http://keepachangelog.com/).

## [1.8.0] - 2026-04-22

### Changed

- Defer plugin setup to the `plugins_loaded` hook.

## [1.7.0] - 2026-03-04

### Added

- Add i18n support with `load_plugin_textdomain`.
- Add server-side validation for block attributes.

### Changed

- Refactor plugin to use singleton pattern.
- Add PSR-4 autoloading.

### Fixed

- Fix incorrect text domain in editor controls.

## [1.6.0] - 2025-10-26

### Changed

- Change plugin update checker to look for tags.
- Update dependencies.

## [1.5.1] - 2025-08-15

### Changed

- Update dependencies.
- Update URI tag.
- Update "Requires at least" tag.

## [1.5.0] - 2025-03-02

### Changed

- Add minor UI tweaks.

### Removed

- Remove WordPress.org installation steps.

## [1.4.1] - 2024-12-07

### Changed

- Remove global variable.

## [1.4.0] - 2024-11-30

### Added

- Update mechanism and vendor folder.

## [1.3.1] - 2024-11-29

### Changed

- Update namespace and constant prefix.

## [1.3.0] - 2024-11-15

### Changed

- Bump WordPress version "tested up to" 6.7.
- Update littlefoot.js to 4.1.2.
- Update plugin description.

## [1.2.0] - 2024-03-17

### Changed

- Update plugin name.

## [1.1.0] - 2024-02-19

### Removed

- Remove "Enable" toggle control. Littlefoot will always be enabled if the plugin is active.

## [1.0.0] - 2024-01-30

- Initial release.
