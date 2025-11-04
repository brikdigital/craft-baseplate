import { Meta, StoryObj } from '@storybook/server-webpack5';

export default {
	title: 'Components/Atoms/Badge',
	argTypes: {
		htmlTag: {
			name: 'HTML Tag',
			description: 'The HTML tag to use for the badge.',
			control: 'select',
			options: ['span', 'div', 'a'],
			table: {
				category: '(1) Badge',
				defaultValue: {
					summary: 'span',
				},
			},
		},
		theme: {
			name: 'Theme',
			description: 'Defines the badge background and text color.',
			control: 'select',
			options: ['primary', 'secondary'],
			table: {
				category: '(1) Badge',
				defaultValue: {
					summary: 'primary',
				},
			},
		},
		size: {
			name: 'Size',
			description: 'The badge size, defaults to `medium`',
			control: 'select',
			options: ['large', 'medium', 'small'],
			table: {
				category: '(1) Badge',
				defaultValue: {
					summary: 'medium',
				},
			},
		},
		text: {
			name: 'Text',
			description: 'The text of the badge.',
			control: 'text',
			table: {
				category: '(1) Badge',
				defaultValue: {
					summary: '',
				},
			},
		},
		url: {
			name: 'Url',
			description: 'The link for the badge. Only used when the badge is an anchor link.',
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
			description:
				'The target of the link, only used when the button is an anchor link. Defaults to `_self`. If the target is set to `_blank`, the rel will be set to `noopener noreferrer`.',
			control: 'select',
			options: ['_self', '_blank', '_parent', '_top'],
			table: {
				category: '(2) Url',
				defaultValue: {
					summary: '_self',
				},
			},
		},
		badgeClasses: {
			name: 'Badge classes',
			description: 'Additional classes to add to the badge.',
			control: 'text',
			table: {
				category: '(1) Badge',
				defaultValue: {
					summary: '',
				},
			},
		},
	},
} satisfies Meta;

export const PrimaryLarge: StoryObj = {
	name: 'Primary - large',
	args: {
		htmlTag: 'span',
		theme: 'primary',
		size: 'large',
		text: 'Badge text',
		url: '',
		target: '_self',
		badgeClasses: '',
	},
};
export const SecondaryLarge: StoryObj = {
	name: 'Secondary - large',
	args: {
		htmlTag: 'span',
		theme: 'secondary',
		size: 'large',
		text: 'Badge text',
		url: '',
		target: '',
		badgeClasses: '',
	},
};
export const PrimaryMedium: StoryObj = {
	name: 'Primary - medium',
	args: {
		htmlTag: 'span',
		theme: 'primary',
		size: 'medium',
		text: 'Badge text',
		url: '',
		target: '_self',
		badgeClasses: '',
	},
};
export const SecondaryMedium: StoryObj = {
	name: 'Secondary - medium',
	args: {
		htmlTag: 'span',
		theme: 'secondary',
		size: 'medium',
		text: 'Badge text',
		url: '',
		target: '',
		badgeClasses: '',
	},
};
export const PrimarySmall: StoryObj = {
	name: 'Primary - small',
	args: {
		htmlTag: 'span',
		theme: 'primary',
		size: 'small',
		text: 'Badge text',
		url: '',
		target: '_self',
		badgeClasses: '',
	},
};
export const SecondarySmall: StoryObj = {
	name: 'Secondary - small',
	args: {
		htmlTag: 'span',
		theme: 'secondary',
		size: 'small',
		text: 'Badge text',
		url: '',
		target: '',
		badgeClasses: '',
	},
};
