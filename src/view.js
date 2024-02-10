import littlefoot from 'littlefoot';

document.addEventListener('DOMContentLoaded', () => {
	const footnotes = document.querySelector('.wp-block-footnotes[data-littlefoot]');
	if (footnotes) {
		let options = {};
		try {
			options = JSON.parse(footnotes.dataset.littlefoot);
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error(e);
			return;
		}

		littlefoot({
			...{
				scope: '[data-fn]',
				anchorPattern: /[0-9a-fA-F-]+/gi,
			},
			...options,
		});
	}
});
