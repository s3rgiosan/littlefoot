import littlefoot from 'littlefoot'

littlefoot({
	scope: '[data-fn]',
	anchorPattern: /[0-9a-fA-F-]+/gi
});
