import { Meta, StoryObj } from '@storybook/server-webpack5';

export default {
	title: 'Components/Atoms/Image',
	argTypes: {
		image: {
			name: 'Image',
			description: 'The link to the displayed image',
			control: 'text',
			table: {
				category: '(1) Image',
				defaultValue: {
					summary: 'https://http.cat/404',
				},
			},
		},
		imageMobile: {
			name: 'Mobile image',
			description: 'The link to the image on mobile. If empty, the desktop image will be used.',
			control: 'text',
			table: {
				category: '(1) Image',
				defaultValue: {
					summary: '',
				},
			},
		},
		alt: {
			name: 'Alt text',
			description: 'The alt text for the image',
			control: 'text',
			table: {
				category: '(1) Image',
				defaultValue: {
					summary: '',
				},
			},
		},
		loading: {
			name: 'Loading',
			description:
				'The loading strategy to use for the image. Use `lazy` for images that are not immediately visible to the user, but are still important for the page. Use `eager` for images that are immediately visible to the user. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-loading',
			control: 'inline-radio',
			options: ['lazy', 'eager'],
			table: {
				category: '(2) Settings',
				defaultValue: {
					summary: 'lazy',
				},
			},
		},
		fetchpriority: {
			name: 'Fetch priority',
			description:
				'The fetch strategy to use for the image. Use `high` for images that are immediately visible to the user. Use `low` for images that are not immediately visible to the user, but are still important for the page. Defaults to `auto`. It is used if no value is set or if an invalid value is set. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-fetchpriority',
			control: 'inline-radio',
			options: ['auto', 'high', 'low'],
			table: {
				category: '(2) Settings',
				defaultValue: {
					summary: 'auto',
				},
			},
		},
		transform: {
			name: 'Transform',
			description: 'The transform to apply to the image. Defaults to `default`.',
			control: 'text',
			table: {
				category: '(2) Settings',
				defaultValue: {
					summary: 'default',
				},
			},
		},
		imageClasses: {
			name: 'Image classes',
			description: 'The classes to apply to the image',
			control: 'text',
			table: {
				category: '(3) Classes',
				defaultValue: {
					summary: '',
				},
			},
		},
		wrapperClasses: {
			name: 'Wrapper classes',
			description: 'The classes to apply to the wrapper',
			control: 'text',
			table: {
				category: '(3) Classes',
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
		image: 'https://http.cat/404',
		imageMobile: '',
		alt: 'Lorem ipsum dolar sit amet',
		loading: 'lazy',
		fetchpriority: 'auto',
		transform: 'default',
		imageClasses: '',
		wrapperClasses: '',
	},
};
