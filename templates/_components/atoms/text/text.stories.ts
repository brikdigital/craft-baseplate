import { Meta, StoryObj } from '@storybook/server-webpack5';

export default {
	title: 'Components/Atoms/Text',
	argTypes: {
		html: {
			name: 'Html',
			description: "The html to render. Defaults to `''`.",
			control: 'text',
			table: {
				category: '(1) HTML',
				defaultValue: {
					summary: '',
				},
			},
		},
		variant: {
			name: 'Variant',
			description: 'Defines the button background and text color. Defaults to `default`',
			control: {
				type: 'select',
				labels: {
					default: 'Default',
					darkBg: 'Dark background',
				},
			},
			options: ['default', 'darkBg'],
			table: {
				category: '(2) Settings',
				defaultValue: {
					summary: 'default',
				},
			},
		},
	},
} satisfies Meta;

export const RightText: StoryObj = {
	args: {
		html: '<h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2><p>Animi veniam sunt accusantium voluptate? <strong>Blanditiis qui quae eius iste fugiat</strong> voluptates sed pariatur quas expedita nobis, vero sequi praesentium quis laboriosam!</p><h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3><p>Impedit quo tempora optio ab perferendis maxime quas exercitationem deleniti, <a href="#">sint nostrum corporis ipsa</a> debitis dolor quasi similique repudiandae, voluptates modi iusto ratione vitae molestiae beatae in. Voluptatibus, velit nemo.</p><h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h4><p>Sit error, animi, at, eius perspiciatis nisi distinctio saepe numquam cumque atque suscipit esse voluptas quibusdam non perferendis deleniti maxime a labore delectus blanditiis quaerat eum. Nam magnam veniam delectus!</p><ul><li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas alias, autem eveniet enim accusamus veritatis. Cum eos consectetur iste odio laboriosam ut perferendis ullam quis, harum molestias, asperiores, voluptas sit.</li><li>Nesciunt distinctio impedit dicta reprehenderit deserunt, atque beatae non praesentium soluta quod expedita libero repudiandae incidunt doloribus consequatur sed quidem velit unde, fugiat commodi nam cumque in. Modi, quaerat labore.</li><li>Voluptatem dolorem, quia et iure vitae voluptas quod accusantium reiciendis vel laudantium eum! Explicabo voluptate soluta magnam, dicta optio iste quis accusamus! Esse deleniti, nesciunt quae quis iusto minima delectus.</li><li>Tempore, tempora blanditiis hic ab laboriosam ducimus ut! Placeat quibusdam aliquid qui ad ipsam. Dolores iusto illum corrupti natus dolor quaerat incidunt ipsa deserunt? Officia nulla quaerat non recusandae aliquid?</li></ul><ol><li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas alias, autem eveniet enim accusamus veritatis. Cum eos consectetur iste odio laboriosam ut perferendis ullam quis, harum molestias, asperiores, voluptas sit.</li><li>Nesciunt distinctio impedit dicta reprehenderit deserunt, atque beatae non praesentium soluta quod expedita libero repudiandae incidunt doloribus consequatur sed quidem velit unde, fugiat commodi nam cumque in. Modi, quaerat labore.</li><li>Voluptatem dolorem, quia et iure vitae voluptas quod accusantium reiciendis vel laudantium eum! Explicabo voluptate soluta magnam, dicta optio iste quis accusamus! Esse deleniti, nesciunt quae quis iusto minima delectus.</li><li>Tempore, tempora blanditiis hic ab laboriosam ducimus ut! Placeat quibusdam aliquid qui ad ipsam. Dolores iusto illum corrupti natus dolor quaerat incidunt ipsa deserunt? Officia nulla quaerat non recusandae aliquid?</li></ol><table><tr><th>Column 1</th><th>Column 2</th><th>Column 3</th></tr><tr><td>Cell 1</td><td>Cell 2</td><td>Cell 3</td></tr><tr><td>Cell 4</td><td>Cell 5</td><td>Cell 6</td></tr></table>',
		variant: 'default',
	},
};

export const BlockQuote: StoryObj = {
	args: {
		html: "<blockquote>Words can be like X-rays, if you use them properly—they'll go through anything. You read and you're pierced.</blockquote><p>—Aldous Huxley, Brave New World</p>",
		variant: 'default',
	},
};
