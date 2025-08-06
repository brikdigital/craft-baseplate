import { Meta, StoryObj } from '@storybook/server';

export default {
	parameters: {
		controls: {
			expanded: true,
		},
	},
	argTypes: {
		preHeading: {
			name: 'Pre heading',
			description: 'The smaller heading above the main one',
			control: 'text',
			table: {
				defaultValue: {
					summary: 'some pre heading',
				},
			},
		},
		heading: {
			name: 'Heading',
			description: 'The large heading of the block',
			control: 'text',
			table: {
				defaultValue: {
					summary: 'some heading',
				},
			},
		},
	},
} satisfies Meta;

export const Text: StoryObj = {
	args: {
		preHeading: 'some pre heading',
		heading: 'some heading',
	},
};
