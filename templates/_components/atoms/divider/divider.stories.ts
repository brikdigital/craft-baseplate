import { Meta, StoryObj } from '@storybook/server';

export default {
	title: 'Components/Atoms/Divider',
	argTypes: {
		height: {
			name: 'Height',
			description: 'The tailwind class that defines the height.',
			control: 'text',
			table: {
				category: '(1) Default',
				defaultValue: {
					summary: 'h-0.5',
				},
			},
		},
		dividerClasses: {
			name: 'Divder classes',
			description: 'Additional classes to add to the divider.',
			table: {
				category: '(1) Default',
				defaultValue: {
					summary: '',
				},
			},
			control: 'text',
		},
		color: {
			name: 'Divider color',
			description: 'The tailwind class that defines the color.',
			control: 'text',
			table: {
				category: '(1) Default',
				defaultValue: {
					summary: 'bg-secondary',
				},
			},
		},
	},
} satisfies Meta;

export const Divider: StoryObj = {
	name: 'Divider',
	args: {
		height: 'h-0.5',
		color: 'bg-secondary',
		dividerClasses: '',
	},
};
