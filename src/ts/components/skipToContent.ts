// Move focus to <main> so keyboard and screen reader users continue from the content (swup may swallow the hash jump)
export default function skipToContent() {
	const link = document.querySelector<HTMLAnchorElement>('#skipToContent a');

	link?.addEventListener('click', () => {
		document.querySelector<HTMLElement>('#main')?.focus();
	});
}
