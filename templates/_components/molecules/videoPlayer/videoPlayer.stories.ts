import { Meta, StoryObj } from '@storybook/server';

export default {
	title: 'Components/Molecules/Video Player',
	argTypes: {
		video: {
			name: 'Video',
			description: 'The video',
			control: 'text',
			table: {
				category: '(1) Video',
				defaultValue: {
					summary: '',
				},
			},
		},
		type: {
			name: 'Type',
			description: 'The type of the video',
			control: 'select',
			options: ['inline', 'inlineAutoplay', 'popup'],
			table: {
				category: '(1) Video',
				defaultValue: {
					summary: 'inline',
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
			description: 'The wrapper classes.',
			control: 'text',
			table: {
				category: '(2) Settings',
				defaultValue: {
					summary: '',
				},
			},
		},
	},
} satisfies Meta;

export const Video: StoryObj = {
	name: 'Video',
	args: {
		video: 'https://www.youtube.com/watch?v=K4TOrB7at0Y',
		type: 'inline',
		posterImage: 'https://http.cat/404',
	},
};
export const VideoAutoplay: StoryObj = {
	name: 'Video autoplay',
	args: {
		video: 'https://www.youtube.com/watch?v=K4TOrB7at0Y',
		type: 'inlineAutoplay',
		posterImage: 'https://http.cat/404',
	},
};
export const VideoPopup: StoryObj = {
	name: 'Video popup',
	args: {
		video: 'https://www.youtube.com/watch?v=K4TOrB7at0Y',
		type: 'popup',
		posterImage: 'https://http.cat/404',
	},
};
