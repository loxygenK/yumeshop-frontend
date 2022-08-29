import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { SimpleCard } from '.';

export default {
  component: SimpleCard,
  title: 'atoms/SimpleCard',
} as ComponentMeta<typeof SimpleCard>;

export const Default: ComponentStoryObj<typeof SimpleCard> = {
  args: {
    imageUrl: 'https://picsum.photos/600',
    children: 'Card content',
  },
};
