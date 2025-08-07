import { Source, useOf } from '@storybook/addon-docs/blocks';
import { match } from 'ts-pattern';
import dedent from 'dedent';

export default function DefaultInclude() {
	const { story } = useOf('story', ['story']);
	const path = story.parameters.fileName
		.replace('./templates', '')
		.replace('.stories.json', '.twig')
		.replace('.stories.ts', '.twig')
		.replace('.stories.tsx', '.twig');
	const hasArgs = Object.keys(story.argTypes).length > 0;

	if (!hasArgs) return <Source language={'twig'} code={`{% include "${path}" %}`} />;

	return (
		<Source
			language="twig"
			code={dedent`
        {% include "${path}" with {\n${Object.keys(story.argTypes)
					.map((key) => {
						let value = story.argTypes[key].table?.defaultValue?.summary;
						if (!value && value !== '')
							value = 'No default value was set. Configure table.defaultValue.summary!';

						if (value.startsWith('[') || value.startsWith('{')) {
							console.log(value);
							try {
								value = JSON.parse(value);
							} catch (e) {
								value = 'Whatever default value was provided here failed JSON.parse.';
							}
						}

						value = match(typeof value)
							.with('string', () => `"${value}"`)
							.with('number', 'boolean', () => value)
							.with('object', () => JSON.stringify(value))
							.otherwise(
								() => `"The type of this option's default value wasn't recognized. Report this!"`,
							);

						return `    ${key}: ${value}`;
					})
					.join(',\n        ')}
        } %}
      `}
		/>
	);
}
