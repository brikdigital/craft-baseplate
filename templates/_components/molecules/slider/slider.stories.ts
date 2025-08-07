import { Meta, StoryObj } from '@storybook/server';

export default {
	title: 'Components/Molecules/Slider',
	argTypes: {
		slides: {
			name: 'Slides',
			description: 'The slides',
			control: 'text',
			defaultValue: '',
			table: {
				category: '(1) Slides',
				defaultValue: {
					summary: '',
				},
			},
		},
		sliderType: {
			name: 'Slider type',
			description: 'The slider type',
			control: 'select',
			options: ['cards', 'fullWidth'],
			table: {
				category: '(2) Settings',
				defaultValue: {
					summary: '',
				},
			},
		},
		showNavigation: {
			name: 'Navigation',
			description: 'If the navigation should be shown',
			control: 'boolean',
			table: {
				category: '(2) Settings',
				defaultValue: {
					summary: 'true',
				},
			},
		},
		showPagination: {
			name: 'Pagination',
			description: 'If the pagination should be shown',
			control: 'boolean',
			table: {
				category: '(2) Settings',
				defaultValue: {
					summary: 'false',
				},
			},
		},
	},
} satisfies Meta;

export const CardSlider: StoryObj = {
	name: 'Card slider',
	args: {
		slides: '',
		sliderType: 'cards',
		showNavigation: true,
		showPagination: false,
	},
};
export const FullWidthSlider: StoryObj = {
	name: 'Full width slider',
	args: {
		slides: '',
		sliderType: 'fullWidth',
		showNavigation: true,
		showPagination: false,
	},
};
