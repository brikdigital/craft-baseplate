import { Of, Source } from '@storybook/blocks';
import dedent from 'dedent';
import { match } from 'ts-pattern';
import React, { useContext } from 'react';
import { PreparedStory } from '@storybook/types';
import { DocsContext } from '@storybook/blocks';
import { DocsContextProps } from '@storybook/addon-docs';

export default function DefaultInclude({ story: comStories }: { story: Of }) {
  const state = useContext(DocsContext) as DocsContextProps & { primaryStory: PreparedStory };
  const path = state.primaryStory.parameters.fileName
    .replace('./templates/', '')
    .replace('.stories.json', '.twig');

  return (
    <Source
      language="twig"
      code={dedent`
        {% include "${path}" with {\n${Object.keys(comStories.default.argTypes)
          .map((key) => {
            let value = comStories.default.argTypes[key].defaultValue;
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
