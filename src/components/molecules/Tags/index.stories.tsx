import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Tags } from '.';

export default {
  component: Tags,
  title: 'molecules/Tags',
} as ComponentMeta<typeof Tags>;

export const Default: ComponentStoryObj<typeof Tags> = {
  args: {
    tags: [
      { name: 'Tag-A', color: '#ff0000' },
      { name: 'Tag-B', color: 'green' },
      { name: 'Tag-C', color: '#0000ff' },
    ],
  },
};
