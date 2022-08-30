import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Carousel } from '.';

export default {
  component: Carousel,
  title: 'atoms/Carousel',
} as ComponentMeta<typeof Carousel>;

export const Default: ComponentStoryObj<typeof Carousel> = {
  args: {
    images: [
      {
        id: '1',
        imageUrl: 'https://picsum.photos/id/1/600/600',
        linkHref: 'https://example.com/1',
      },
      {
        id: '2',
        imageUrl: 'https://picsum.photos/id/2/600/600',
        linkHref: 'https://example.com/2',
      },
      {
        id: '3',
        imageUrl: 'https://picsum.photos/id/3/600/600',
        linkHref: 'https://example.com/3',
      },
    ],
  },
};
