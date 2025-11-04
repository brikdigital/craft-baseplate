import { Meta, StoryObj } from '@storybook/server-webpack5';

export default {
	title: 'Components/Molecules/Heading',
	parameters: {
		docs: {
			story: {
				inline: true,
			},
		},
	},
	argTypes: {
		preHtmlTag: {
			name: 'HTML tag pre heading',
			description: 'The HTML tag to use for the pre heading.',
			control: 'select',
			options: ['p', 'span'],
			table: {
				category: '(1) Pre Heading',
				defaultValue: {
					summary: '',
				},
			},
		},
		preText: {
			name: 'Pre heading text',
			description: 'The text of the pre-heading.',
			control: 'text',
			table: {
				category: '(1) Pre Heading',
				defaultValue: {
					summary: '',
				},
			},
		},
		colorPre: {
			name: 'Pre Heading color',
			description: 'A Tailwind CSS class describing the color of the pre-heading text.',
			control: 'text',
			table: {
				category: '(1) Pre Heading',
				defaultValue: {
					summary: 'text-secondary',
				},
			},
		},
		preHeadingClasses: {
			name: 'Pre Heading classes',
			description: 'Any additional classes to add to the pre heading.',
			control: 'text',
			table: {
				category: '(1) Pre Heading',
				defaultValue: {
					summary: 'none',
				},
			},
		},
		preTextTransform: {
			name: 'Text transform',
			description: 'The text transform to apply to the pre heading.',
			control: 'select',
			options: ['', 'uppercase', 'lowercase', 'capitalize'],
			table: {
				category: '(1) Pre Heading',
				defaultValue: {
					summary: '',
				},
			},
		},
		htmlTag: {
			name: 'HTML tag',
			description: 'The HTML tag to use for the heading.',
			control: 'select',
			options: ['h2', 'h3', 'h4', 'span'],
			table: {
				category: '(2) Heading',
				defaultValue: {
					summary: 'h2',
				},
			},
		},
		headingText: {
			name: 'Heading text',
			description: 'The heading text.',
			control: 'text',
			table: {
				category: '(2) Heading',
				defaultValue: {
					summary: '',
				},
			},
		},
		size: {
			name: 'Size',
			description: 'The size of the heading.',
			control: 'select',
			options: ['large', 'medium', 'small'],
			table: {
				category: '(2) Heading',
				defaultValue: {
					summary: 'medium',
				},
			},
		},
		headingClasses: {
			name: 'Heading classes',
			description: 'Any additional classes to add to the heading.',
			control: 'text',
			table: {
				category: '(2) Heading',
				defaultValue: {
					summary: '',
				},
			},
		},
		color: {
			name: 'Color',
			description: 'A Tailwind CSS class describing the color of the heading text.',
			control: 'text',
			table: {
				category: '(2) Heading',
				defaultValue: {
					summary: 'text-black',
				},
			},
		},
		textTransform: {
			name: 'Text transform',
			description: 'The text transform to apply to the heading text.',
			control: 'select',
			options: ['', 'uppercase', 'lowercase', 'capitalize'],
			table: {
				category: '(2) Heading',
				defaultValue: {
					summary: '',
				},
			},
		},
		align: {
			name: 'Align',
			description: 'The alignment of the heading.',
			control: 'inline-radio',
			options: ['left', 'center', 'right'],
			table: {
				category: '(3) Settings',
				defaultValue: {
					summary: 'left',
				},
			},
		},
		wrapperClasses: {
			name: 'Wrapper Classes',
			description: 'Any additional classes to add to the heading and pre heading wrapper element.',
			control: 'text',
			table: {
				category: '(3) Settings',
				defaultValue: {
					summary: '',
				},
			},
		},
	},
} satisfies Meta;

export const Default: StoryObj = {
	name: 'Default',
	args: {
		preHtmlTag: 'p',
		preText: 'Pre-heading text',
		colorPre: 'text-secondary',
		preHeadingClasses: '',
		preTextTransform: '',
		align: 'left',
		wrapperClasses: '',
		htmlTag: 'h2',
		headingText: 'Heading text',
		size: 'medium',
		color: 'text-primary',
		headingClasses: '',
		textTransform: '',
	},
};
