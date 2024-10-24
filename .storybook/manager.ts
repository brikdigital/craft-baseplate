import { addons, types } from '@storybook/manager-api';
import { Tool } from './Tool';

addons.register('INTERNAL', () => {
  addons.add('INTERNAL_TOOL', {
    type: types.TOOL,
    title: 'Copy Twig',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: Tool,
  });
});
