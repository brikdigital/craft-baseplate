import {
  createCopyToClipboardFunction,
  IconButton,
  TooltipMessage,
  WithTooltip,
} from 'storybook/internal/components';
import { useArgs, useGlobals, useStorybookState } from 'storybook/manager-api';
import { API_DocsEntry } from 'storybook/internal/types';
import React from 'react';
import dedent from 'dedent';
import { match } from 'ts-pattern';

export const Tool = (): React.JSX.Element => {
  const copy = createCopyToClipboardFunction();
  const state = useStorybookState();
  const [globals] = useGlobals();
  const [args] = useArgs();

  return (
    <WithTooltip
      placement="top"
      trigger="click"
      onClick={() => {
        // storyId may contain variant, take it out
        const storyId = state.storyId.split('--')[0];
        // get the docs page for this component and create a path to the twig file
        const path = (state.index![storyId + '--docs'] as API_DocsEntry).importPath.replace(
          '.mdx',
          '.twig',
        );
        console.log(state, globals, args, path);

        // this code is already ugly enough as it is, please just keep it intact
        // prettier-ignore
        copy(dedent`
          {% include "${path}" with {\n${Object.keys(args)
          .map((key) => {
              let value = args[key];
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
        `)
      }}
      tooltip={({ onHide }) => {
        // auto-hide after a second
        setTimeout(() => onHide(), 1000);
        return <TooltipMessage title="Copied!" />;
      }}>
      <IconButton key="INTERNAL_TOOL" title="Copy Twig Code">
        Copy Twig
      </IconButton>
    </WithTooltip>
  );
};
