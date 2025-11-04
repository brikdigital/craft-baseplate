import { Meta, StoryObj } from '@storybook/server-webpack5';

const wait = (ms: number) => new Promise<void>((res) => setTimeout(res, ms));

export default {
	title: 'Components/Organisms/Text with media',
	argTypes: {
		content: {
			name: 'Content',
			description: 'The content',
			control: 'text',
			table: {
				category: '(1) Content',
				defaultValue: {
					summary: '',
				},
			},
		},
		media: {
			name: 'Media',
			description: 'The media',
			control: 'text',
			table: {
				category: '(1) Content',
				defaultValue: {
					summary: '',
				},
			},
		},
		contentPosition: {
			name: 'Content position',
			description: 'The position of the content. Defaults to `left`.',
			control: 'inline-radio',
			options: ['left', 'right'],
			table: {
				category: '(2) Settings',
				defaultValue: {
					summary: 'left',
				},
			},
		},
		textPosition: {
			name: 'Text position',
			description: 'The position of the text. Defaults to `center`.',
			control: 'select',
			options: ['centered', 'start', 'end'],
			table: {
				category: '(2) Settings',
				defaultValue: {
					summary: 'start',
				},
			},
		},
		textAlignment: {
			name: 'Text alignment',
			description: 'The alignment of the text. Defaults to `left`.',
			control: 'select',
			options: ['left', 'center', 'right'],
			table: {
				category: '(2) Settings',
				defaultValue: {
					summary: 'start',
				},
			},
		},
	},

	async play({ canvasElement, step }) {
		const [leftBtn, rightBtn] = [
			canvasElement.querySelector('.button-prev') as HTMLButtonElement,
			canvasElement.querySelector('.button-next') as HTMLButtonElement,
		];

		await step('wait 500ms', () => wait(500));
		await step('click right', () => rightBtn.click());
		await step('wait 500ms', () => wait(500));
		await step('click right again', () => rightBtn.click());
		await step('wait 500ms', () => wait(500));
		await step('click left', () => leftBtn.click());
		await step('wait 500ms', () => wait(500));
		await step('click left', () => leftBtn.click());
	},
} satisfies Meta;

export const Default: StoryObj = {
	args: {
		content: '',
		media: '',
		contentPosition: 'left',
		textPosition: 'centered',
		textAlignment: 'left',
	},
};
