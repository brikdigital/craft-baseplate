import Alpine from 'alpinejs';

const desktop = window.matchMedia('(min-width: 64rem)');

Alpine.data('mainMenu', () => ({
	open: false,
	sub: null as string | null,

	get trap() {
		return this.open && !desktop.matches;
	},

	toggleSub(key: string) {
		this.sub = this.sub === key ? null : key;

		// On mobile the sub menu is a full overlay: move focus to its back button
		if (this.sub && !desktop.matches) {
			this.$nextTick(() => {
				const back = [...this.$root.querySelectorAll<HTMLElement>('[data-back]')].find(
					(el) => el.offsetParent,
				);
				back?.focus();
			});
		}
	},

	close() {
		this.open = false;
		this.sub = null;
	},

	// Back to the first level and return focus to the item we came from
	back(el: HTMLElement) {
		this.sub = null;
		// the back button sits in the dropdown <ul>, whose parent holds the toggle button
		el.closest('ul')?.parentElement?.querySelector<HTMLElement>('button[aria-expanded]')?.focus();
	},

	// Close a dropdown when focus leaves it. On mobile the overlay stays open (desktopOnly)
	leave(el: HTMLElement, event: FocusEvent, key: string, desktopOnly = false) {
		if (desktopOnly && !desktop.matches) return;
		if (this.sub === key && !el.contains(event.relatedTarget as Node | null)) this.sub = null;
	},

	// Escape closes the dropdown and returns focus to its button
	escape(el: HTMLElement, key: string) {
		if (this.sub !== key) return;
		this.sub = null;
		el.querySelector<HTMLElement>('button')?.focus();
	},

	// Any link click closes the menu, also when swup doesn't start a visit (same URL)
	linkClick(event: MouseEvent) {
		if ((event.target as HTMLElement).closest('a')) this.close();
	},
}));
