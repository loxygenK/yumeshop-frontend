import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { WideCard } from '.';

export default {
  component: WideCard,
  title: 'molecules/WideCard',
} as ComponentMeta<typeof WideCard>;

export const Default: ComponentStoryObj<typeof WideCard> = {
  args: {
    date: '2022/08/30',
    tags: [
      { color: 'red', name: 'Tag-1' },
      { color: 'green', name: 'Tag-2' },
      { color: 'blue', name: 'Tag-3' },
    ],
    text: 'WideCard component '.repeat(50),
  },
};
