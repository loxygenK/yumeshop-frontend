import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { MockAPIProvider } from 'src/storybook/decorators/MockAPIProvider';
import { PromotionsCarousel } from '.';

const response = [
  {
    id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186c',
    title: '春の大感謝祭',
    image: 'https://picsum.photos/id/100/600/600',
    detail: '春の大感謝祭セール開催中！\n期間中最大50%OFF!!',
    link: 'https://example.com/',
  },
  {
    id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186d',
    title: '春の大感謝祭',
    image: 'https://picsum.photos/id/200/600/600',
    detail: '春の大感謝祭セール開催中！\n期間中最大50%OFF!!',
    link: 'https://example.com/',
  },
  {
    id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186e',
    title: '春の大感謝祭',
    image: 'https://picsum.photos/id/400/600/600',
    detail: '春の大感謝祭セール開催中！\n期間中最大50%OFF!!',
    link: 'https://example.com/',
  },
  {
    id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186f',
    title: '春の大感謝祭',
    image: 'https://picsum.photos/id/500/600/600',
    detail: '春の大感謝祭セール開催中！\n期間中最大50%OFF!!',
    link: 'https://example.com/',
  },
];

export default {
  component: PromotionsCarousel,
  title: 'organisms/PromotionsCarousel',
} as ComponentMeta<typeof PromotionsCarousel>;

export const Default: ComponentStoryObj<typeof PromotionsCarousel> = {
  decorators: [
    (Story) => (
      <MockAPIProvider response={response}>
        <Story />
      </MockAPIProvider>
    ),
  ],
};
