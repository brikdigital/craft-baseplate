import { Meta, StoryObj } from '@storybook/server';

export default {
	title: 'Components/Atoms/Pre Heading',
	argTypes: {
		htmlTag: {
			name: 'HTML Tag',
			description: 'The HTML tag to use for the pre heading.',
			control: 'select',
			options: ['p', 'span'],
			table: {
				defaultValue: {
					summary: 'p',
				},
			},
		},
		text: {
			name: 'Pre heading text',
			description: 'The text of the pre-heading.',
			control: 'text',
			defaultValue: '',
		},
		color: {
			name: 'Color',
			description: 'A Tailwind CSS class describing the color of the pre heading text.',
			control: 'text',
			table: {
				defaultValue: {
					summary: 'text-secondary',
				},
			},
		},
		headingClasses: {
			name: 'Heading Classes',
			description: 'Any additional classes to add to the heading.',
			control: 'text',
			table: {
				defaultValue: {
					summary: '',
				},
			},
		},
		uppercase: {
			name: 'Uppercase',
			description: 'Whether the heading text should be uppercased.',
			control: 'boolean',
			table: {
				defaultValue: {
					summary: 'false',
				},
			},
		},
	},
} satisfies Meta;

export const Default: StoryObj = {
	name: 'Default',
	args: {
		htmlTag: 'p',
		text: 'Pre-heading text',
		color: 'text-secondary',
		headingClasses: '',
		uppercase: '',
	},
};
