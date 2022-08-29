import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Tag } from '.';

export default {
  component: Tag,
  title: 'atoms/Tag',
} as ComponentMeta<typeof Tag>;

export const Default: ComponentStoryObj<typeof Tag> = {
  args: {
    color: '#ff0000',
    name: 'Tag',
  },
};
