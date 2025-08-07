import { Meta, StoryObj } from '@storybook/server';

export default {
	title: 'Components/Atoms/Icon',
	argTypes: {
		icon: {
			name: 'Icon',
			description:
				'The svg icon to display. This uses Inline SVG, use only the icon name i.e. `play`.',
			control: 'select',
			options: [
				'chevron-left',
				'chevron-right',
				'chevron-up',
				'chevron-down',
				'hamburger',
				'close',
				'download',
				'plus',
				'minus',
				'play',
			],
			table: {
				category: '(1) Icon',
				defaultValue: {
					summary: '',
				},
			},
		},
		size: {
			name: 'Size',
			description: 'The icon size, defaults to `medium`',
			control: 'select',
			options: ['large', 'medium', 'small'],
			table: {
				category: '(2) Settings',
				defaultValue: {
					summary: 'medium',
				},
			},
		},
		iconClasses: {
			name: 'Icon classes',
			description:
				'Additional classes to add to the icon. Make sure to add a color class to set the color of the icon.',
			control: 'text',
			table: {
				category: '(2) Settings',
				defaultValue: {
					summary: 'text-black',
				},
			},
		},
	},
} satisfies Meta;
export const ChevronLeft: StoryObj = {
	args: {
		size: 'medium',
		icon: 'chevron-left',
		iconClasses: 'text-black',
	},
};
// {
// 	"name": "Chevron right",
// 	"args": {
// 		"size": "medium",
// 		"icon": "chevron-right",
// 		"iconClasses": "text-black"
// 	}
// },
// {
// 	"name": "Chevron up",
// 	"args": {
// 		"size": "medium",
// 		"icon": "chevron-up",
// 		"iconClasses": "text-black"
// 	}
// },
// {
// 	"name": "Chevron down",
// 	"args": {
// 		"size": "medium",
// 		"icon": "chevron-down",
// 		"iconClasses": "text-black"
// 	}
// },
// {
// 	"name": "Hamburger",
// 	"args": {
// 		"size": "medium",
// 		"icon": "hamburger",
// 		"iconClasses": "text-black"
// 	}
// },
// {
// 	"name": "Close",
// 	"args": {
// 		"size": "medium",
// 		"icon": "close",
// 		"iconClasses": "text-black"
// 	}
// },
// {
// 	"name": "Download",
// 	"args": {
// 		"size": "medium",
// 		"icon": "download",
// 		"iconClasses": "text-black"
// 	}
// },
// {
// 	"name": "Plus",
// 	"args": {
// 		"size": "medium",
// 		"icon": "plus",
// 		"iconClasses": "text-black"
// 	}
// },
// {
// 	"name": "Minus",
// 	"args": {
// 		"size": "medium",
// 		"icon": "minus",
// 		"iconClasses": "text-black"
// 	}
// },
// {
// 	"name": "Play",
// 	"args": {
// 		"size": "medium",
// 		"icon": "play",
// 		"iconClasses": "text-black"
// 	}
// },
// {
// 	"name": "Facebook",
// 	"args": {
// 		"size": "medium",
// 		"icon": "facebook",
// 		"iconClasses": "text-black"
// 	}
// },
// {
// 	"name": "Linkedin",
// 	"args": {
// 		"size": "medium",
// 		"icon": "linkedin",
// 		"iconClasses": "text-black"
// 	}
// },
// {
// 	"name": "Instagram",
// 	"args": {
// 		"size": "medium",
// 		"icon": "instagram",
// 		"iconClasses": "text-black"
// 	}
// },
// {
// 	"name": "X",
// 	"args": {
// 		"size": "medium",
// 		"icon": "x",
// 		"iconClasses": "text-black"
// 	}
// },
//
// {
// 	"name": "Whatsapp",
// 	"args": {
// 		"size": "medium",
// 		"icon": "whatsapp",
// 		"iconClasses": "text-black"
// 	}
// },
// {
// 	"name": "Youtube",
// 	"args": {
// 		"size": "medium",
// 		"icon": "youtube",
// 		"iconClasses": "text-black"
// 	}
// },
// {
// 	"name": "Vimeo",
// 	"args": {
// 		"size": "medium",
// 		"icon": "vimeo",
// 		"iconClasses": "text-black"
// 	}
// }

export const ChevronRight: StoryObj = {
	args: {
		size: 'medium',
		icon: 'chevron-right',
		iconClasses: 'text-black',
	},
};

export const ChevronUp: StoryObj = {
	args: {
		size: 'medium',
		icon: 'chevron-up',
		iconClasses: 'text-black',
	},
};

export const ChevronDown: StoryObj = {
	args: {
		size: 'medium',
		icon: 'chevron-down',
		iconClasses: 'text-black',
	},
};

export const Hamburger: StoryObj = {
	args: {
		size: 'medium',
		icon: 'hamburger',
		iconClasses: 'text-black',
	},
};

export const Close: StoryObj = {
	args: {
		size: 'medium',
		icon: 'close',
		iconClasses: 'text-black',
	},
};

export const Download: StoryObj = {
	args: {
		size: 'medium',
		icon: 'download',
		iconClasses: 'text-black',
	},
};

export const Plus: StoryObj = {
	args: {
		size: 'medium',
		icon: 'plus',
		iconClasses: 'text-black',
	},
};

export const Minus: StoryObj = {
	args: {
		size: 'medium',
		icon: 'minus',
		iconClasses: 'text-black',
	},
};

export const Play: StoryObj = {
	args: {
		size: 'medium',
		icon: 'play',
		iconClasses: 'text-black',
	},
};
