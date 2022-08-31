// .storybook/preview.js
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import * as NextImage from 'next/image';
import GlobalStyle from '../src/styles/Globals';
import '../src/helper/initializeDayjs';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => {
    return <OriginalNextImage {...props} unoptimized />;
  },
});

export const parameters = {
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      PC: {
        name: 'PC',
        styles: {
          width: '1280px',
          height: '720px',
        },
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];
