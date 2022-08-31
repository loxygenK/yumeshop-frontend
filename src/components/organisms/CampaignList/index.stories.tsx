import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { MockAPIProvider } from 'src/storybook/decorators/MockAPIProvider';
import { CampaignList } from '.';

export default {
  component: CampaignList,
  title: 'organisms/CampaignList',
} as ComponentMeta<typeof CampaignList>;

const response = [
  {
    id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186c',
    name: '文房具セール',
    thumbnail: 'https://picsum.photos/id/100/300/200',
  },
  {
    id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186d',
    name: 'キャンプ用品セール',
    thumbnail: 'https://picsum.photos/id/200/300/200',
  },
];

export const Default: ComponentStoryObj<typeof CampaignList> = {
  decorators: [
    (Story) => (
      <MockAPIProvider response={response}>
        <Story />
      </MockAPIProvider>
    ),
  ],
};
