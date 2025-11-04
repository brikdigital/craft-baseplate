import { Meta, StoryObj } from '@storybook/server-webpack5';

export default {
	title: 'Components/Atoms/Logo',
	argTypes: {
		logo: {
			name: 'Logo',
			description:
				'The link to the logo. This uses Inline SVG, use only the logo name i.e. `logo`.',
			control: 'text',
			table: {
				category: '(1) Logo',
				defaultValue: {
					summary: 'logo',
				},
			},
		},
		logoClasses: {
			name: 'Logo classes',
			description: 'Additional classes to add to the logo.',
			control: 'text',
			table: {
				category: '(1) Logo',
				defaultValue: {
					summary: 'w-36 h-auto',
				},
			},
		},
		url: {
			name: 'Url',
			description: 'The link for the button. Only used when the button is an anchor link.',
			control: 'text',
			table: {
				category: '(2) Url',
				defaultValue: {
					summary: '',
				},
			},
		},
		target: {
			name: 'Target',
			description: 'The target of the link.',
			control: 'select',
			options: ['_self', '_blank', '_parent', '_top'],
			table: {
				category: '(2) Url',
				defaultValue: {
					summary: '_self',
				},
			},
		},
		linkClasses: {
			name: 'Link classes',
			description: 'Additional classes to add to the link.',
			control: 'text',
			table: {
				category: '(2) Url',
				defaultValue: {
					summary: 'inline-flex',
				},
			},
		},
	},
} satisfies Meta;

export const Logo: StoryObj = {
	name: 'Logo',
	args: {
		logo: 'logo',
		logoClasses: 'w-36 h-auto',
		url: '',
		target: '',
		linkClasses: 'inline-flex',
	},
};
