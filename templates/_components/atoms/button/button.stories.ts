import { Meta, StoryObj } from '@storybook/server';

export default {
	title: 'Components/Atoms/Button',
	argTypes: {
		htmlTag: {
			name: 'HTML Tag',
			description: 'The HTML tag to use for the button (button | a).',
			control: 'select',
			options: ['button', 'a'],
			table: {
				category: '(1) Settings',
				defaultValue: {
					summary: 'button',
				},
			},
		},
		theme: {
			name: 'Theme',
			description: 'Defines the button background and text color.',
			control: 'select',
			options: ['primary', 'secondary', 'textDark', 'textLight'],
			table: {
				category: '(1) Settings',
				defaultValue: {
					summary: 'primary',
				},
			},
		},
		size: {
			name: 'Size',
			description: 'The button size, defaults to `large`',
			control: 'select',
			options: ['large', 'small'],
			table: {
				category: '(1) Settings',
				defaultValue: {
					summary: 'large',
				},
			},
		},
		text: {
			name: 'Text',
			description: 'The text of the button.',
			control: 'text',
			table: {
				category: '(1) Settings',
				defaultValue: {
					summary: '',
				},
			},
		},
		url: {
			name: 'Url',
			description: 'The link for the button. Only used when the button is an anchor link.',
			control: 'text',
			table: {
				category: '(3) Url',
				defaultValue: {
					summary: '',
				},
			},
		},
		target: {
			name: 'Target',
			description: 'The target of the link, only used when the button is an anchor link.',
			control: 'select',
			options: ['_self', '_blank', '_parent', '_top'],
			table: {
				category: '(3) Url',
				defaultValue: {
					summary: '_self',
				},
			},
		},
		icon: {
			name: 'Icon',
			description:
				'The svg icon to display in the button. This uses Inline SVG, use only the path and icon name i.e. `icons/play`.',
			control: 'text',
			table: {
				category: '(4) Icon',
				defaultValue: {
					summary: '',
				},
			},
		},
		iconPosition: {
			name: 'Icon position',
			description: 'The position of the icon.',
			control: 'inline-radio',
			options: ['left', 'right'],
			table: {
				category: '(4) Icon',
				defaultValue: {
					summary: 'left',
				},
			},
		},
		fullWidth: {
			name: 'Full width',
			description: 'Whether the button should be full width.',
			control: 'select',
			options: ['auto', 'always', 'mobile'],
			table: {
				category: '(2) Button',
				defaultValue: {
					summary: 'auto',
				},
			},
		},
		buttonClasses: {
			name: 'Button classes',
			description: 'Additional classes to add to the button.',
			control: 'text',
			table: {
				category: '(1) Settings',
				defaultValue: {
					summary: '',
				},
			},
		},
		rel: {
			name: 'Rel',
			description: 'The rel attribute for the link. Only used when the button is an anchor link.',
			control: {
				type: 'check',
			},
			options: ['noopener', 'noreferrer', 'nofollow', 'opener', 'next', 'prev', 'search'],
			table: {
				category: '(3) Url',
				defaultValue: {
					summary: '',
				},
			},
		},
		type: {
			name: 'Type',
			description: 'The type of the button. Only used when the button is a button element.',
			control: 'select',
			options: ['button', 'submit', 'reset'],
			table: {
				category: '(2) Button',
				defaultValue: {
					summary: 'button',
				},
			},
		},
		role: {
			name: 'Role',
			description:
				"The role of the button. Only used when the button is a button element. Default is `button` and doesn't have to be set.",
			control: 'text',
			table: {
				category: '(2) Button',
				defaultValue: {
					summary: '',
				},
			},
		},
		disabled: {
			name: 'Disabled',
			description: 'Whether the button is disabled or not. Works only for button element.',
			control: 'boolean',
			table: {
				category: '(2) Button',
				defaultValue: {
					summary: 'false',
				},
			},
		},
	},
} satisfies Meta;

export const Primary: StoryObj = {
	name: 'Primary',
	args: {
		htmlTag: 'button',
		theme: 'primary',
		size: 'large',
		text: 'Button text',
		url: '',
		target: '_self',
		icon: '',
		iconPosition: 'left',
		type: 'button',
		fullWidth: 'auto',
		buttonClasses: '',
		rel: '',
		role: '',
		disabled: false,
	},
};
export const Secondary: StoryObj = {
	name: 'Secondary',
	args: {
		htmlTag: 'button',
		theme: 'secondary',
		size: 'large',
		text: 'Button text',
		url: '',
		target: '',
		icon: '',
		iconPosition: 'left',
		type: 'button',
		fullWidth: 'auto',
		buttonClasses: '',
		rel: '',
		role: '',
		disabled: false,
	},
};
export const TextDark: StoryObj = {
	name: 'Text dark',
	args: {
		htmlTag: 'button',
		theme: 'textDark',
		size: 'large',
		text: 'Button text',
		url: '',
		target: '',
		icon: '',
		iconPosition: 'left',
		type: 'button',
		fullWidth: 'auto',
		buttonClasses: '',
		rel: '',
		role: '',
		disabled: false,
	},
};
export const TextLight: StoryObj = {
	name: 'Text light',
	args: {
		htmlTag: 'button',
		theme: 'textLight',
		size: 'large',
		text: 'Button text',
		url: '',
		target: '',
		icon: '',
		iconPosition: 'left',
		type: 'button',
		fullWidth: 'auto',
		buttonClasses: '',
		rel: '',
		role: '',
		disabled: false,
	},
};
