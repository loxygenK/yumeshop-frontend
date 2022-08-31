import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { mockAPIDecorator } from 'src/storybook/decorators/MockAPIProvider';
import { InformationList } from '.';

export default {
  component: InformationList,
  title: 'organisms/InformationList',
} as ComponentMeta<typeof InformationList>;

const response = [
  {
    id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186c',
    title: 'メンテナンスのお知らせ',
    detail:
      '本日の19:00からメンテナンスのため、一時間ほどのサービス停止を予定しています。\n再開しだいメールにてアナウンスさせていただきます。\nご迷惑をおかけしますが、ご理解ご協力のほどをよろしくお願いいたします。',
    tags: [
      {
        id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186c',
        name: '重要',
        color: 'red',
        tag_group: 'information',
      },
      {
        id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186d',
        name: 'メンテナンス',
        color: 'orange',
        tag_group: 'information',
      },
    ],
    announced_at: '2017-07-21T17:32:28Z',
  },
  {
    id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186c',
    title: 'メンテナンスのお知らせ',
    detail:
      '本日の19:00からメンテナンスのため、一時間ほどのサービス停止を予定しています。\n再開しだいメールにてアナウンスさせていただきます。\nご迷惑をおかけしますが、ご理解ご協力のほどをよろしくお願いいたします。',
    tags: [
      {
        id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186c',
        name: '重要',
        color: 'red',
        tag_group: 'information',
      },
      {
        id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186d',
        name: 'メンテナンス',
        color: 'orange',
        tag_group: 'information',
      },
    ],
    announced_at: '2017-07-21T17:32:28Z',
  },
];

export const Default: ComponentStoryObj<typeof InformationList> = {
  decorators: [mockAPIDecorator(response)],
};
