import { Source, useOf } from '@storybook/addon-docs/blocks';
import { match } from 'ts-pattern';
import dedent from 'dedent';

export default function DefaultInclude() {
  const { story } = useOf('story', ['story']);
  const path = story.parameters.fileName
    .replace('./templates', '')
    .replace('.stories.json', '.twig');
  const hasArgs = Object.keys(story.argTypes).length > 0;

  if (!hasArgs) return <Source language={'twig'} code={`{% include "${path}" %}`} />;

  return (
    <Source
      language="twig"
      code={dedent`
        {% include "${path}" with {\n${Object.keys(story.argTypes)
          .map((key) => {
            let value = story.argTypes[key].defaultValue;
            value = match(typeof value)
              .with('string', () => `"${value}"`)
              .with('number', 'boolean', () => value)
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
