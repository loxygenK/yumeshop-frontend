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
        imageUrl: 'https://picsum.photos/1/600/600',
        linkHref: 'https://example.com/1',
      },
      {
        imageUrl: 'https://picsum.photos/2/600/600',
        linkHref: 'https://example.com/2',
      },
      {
        imageUrl: 'https://picsum.photos/3/600/600',
        linkHref: 'https://example.com/3',
      },
    ],
  },
};
