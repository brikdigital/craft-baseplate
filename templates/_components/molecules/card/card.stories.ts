import { Meta, StoryObj } from '@storybook/server';

export default {
	title: 'Components/Molecules/Card',
	argTypes: {
		preText: {
			name: 'Pre heading text',
			description: 'The text of the pre-heading.',
			control: 'text',
			table: {
				category: '(1) Card content',
				defaultValue: {
					summary: '',
				},
			},
		},
		headingText: {
			name: 'Heading text',
			description: 'The heading text.',
			control: 'text',
			table: {
				category: '(1) Card content',
				defaultValue: {
					summary: '',
				},
			},
		},
		body: {
			name: 'Body',
			description: 'The body text.',
			control: 'text',
			table: {
				category: '(1) Card content',
				defaultValue: {
					summary: '',
				},
			},
		},
		image: {
			name: 'Image',
			description: 'The card image.',
			control: 'text',
			table: {
				category: '(2) Card image',
				defaultValue: {
					summary: 'https://http.cat/404',
				},
			},
		},
		imageOverlay: {
			name: 'Image content',
			description: 'The card image overlay content.',
			control: 'text',
			table: {
				category: '(2) Card image',
				defaultValue: {
					summary: '',
				},
			},
		},
		url: {
			name: 'Link',
			description: 'The card link.',
			control: 'text',
			table: {
				category: '(3) Card link',
				defaultValue: {
					summary: 'https://www.brik.digital',
				},
			},
		},
		buttonText: {
			name: 'Button text',
			description: 'The button text.',
			control: 'text',
			table: {
				category: '(3) Card link',
				defaultValue: {
					summary: 'Meer info',
				},
			},
		},
		wrapperClasses: {
			name: 'Wrapper classes',
			description: 'The wrapper classes.',
			control: 'text',
			table: {
				category: '(4) Settings',
				defaultValue: {
					summary: '',
				},
			},
		},
	},
} satisfies Meta;

export const Card: StoryObj = {
	name: 'Card',
	args: {
		preText: 'Card pre title',
		headingText: 'Card title',
		body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies ultricies.',
		image: 'https://http.cat/404',
		url: 'https://www.brik.digital',
		buttonText: 'Meer info',
		wrapperClasses: '',
	},
};
