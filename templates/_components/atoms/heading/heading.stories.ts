import { Meta, StoryObj } from '@storybook/server-webpack5';

export default {
	title: 'Components/Atoms/Heading',
	argTypes: {
		htmlTag: {
			name: 'HTML Tag',
			description: 'The HTML tag to use for the heading. Defaults to `h2`.',
			control: 'select',
			options: ['h2', 'h3', 'h4', 'span'],
			table: {
				defaultValue: {
					summary: 'h2',
				},
			},
		},
		text: {
			name: 'Heading text',
			description: 'The heading text.',
			control: 'text',
			table: {
				defaultValue: {
					summary: '',
				},
			},
		},
		size: {
			name: 'Size',
			description: 'The size of the heading. Defaults to `large`.',
			control: 'select',
			options: ['large', 'medium', 'small'],
			table: {
				defaultValue: {
					summary: 'medium',
				},
			},
		},
		color: {
			name: 'Color',
			description:
				'A Tailwind CSS class describing the color of the heading text. Defaults to `text-black`.',
			control: 'text',
			table: {
				defaultValue: {
					summary: 'text-black',
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
		htmlTag: 'h2',
		text: 'Heading text',
		size: 'medium',
		color: 'text-primary',
		headingClasses: '',
		uppercase: '',
	},
};
