import { Meta, StoryObj } from '@storybook/server';

export default {
	title: 'Components/Atoms/Video',
	argTypes: {
		video: {
			name: 'Video',
			description: 'The link to the video.',
			control: 'text',
			table: {
				category: '(1) Video',
				defaultValue: {
					summary: '',
				},
			},
		},
		autoPlay: {
			name: 'Autoplay',
			description: 'The link to the video.',
			control: 'boolean',
			table: {
				category: '(2) Settings',
				defaultValue: {
					summary: 'false',
				},
			},
		},
		playsInline: {
			name: 'Plays inline',
			description: 'Plays the video inline',
			control: 'boolean',
			table: {
				category: '(2) Settings',
				defaultValue: {
					summary: 'true',
				},
			},
		},
		controls: {
			name: 'Controls',
			description: 'If the controls should be displayed.',
			control: 'boolean',
			table: {
				category: '(2) Settings',
				defaultValue: {
					summary: 'true',
				},
			},
		},
		loop: {
			name: 'Loop',
			description: 'If the video should loop.',
			control: 'boolean',
			table: {
				category: '(2) Settings',
				defaultValue: {
					summary: 'false',
				},
			},
		},
		muted: {
			name: 'Muted',
			description: 'If the video should be muted.',
			control: 'boolean',
			table: {
				category: '(2) Settings',
				defaultValue: {
					summary: 'false',
				},
			},
		},
		posterImage: {
			name: 'Poster Image',
			description: 'The poster image.',
			control: 'text',
			table: {
				category: '(2) Settings',
				defaultValue: {
					summary: '',
				},
			},
		},
		wrapperClasses: {
			name: 'Wrapper classes',
			description: 'The classes to apply to the wrapper.',
			control: 'text',
			table: {
				category: '(2) Settings',
				defaultValue: {
					summary: 'lazyload w-full h-full',
				},
			},
		},
	},
} satisfies Meta;

export const Video: StoryObj = {
	name: 'Video',
	args: {
		video:
			'https://craft-baseplate.ddev.site/assets/files/Video/file_example_MP4_480_1_5MG_2024-11-01-114244_ibhr.mp4',
		autoPlay: true,
		playsInline: true,
		controls: false,
		loop: true,
		muted: true,
		posterImage: 'https://http.cat/404',
	},
};
