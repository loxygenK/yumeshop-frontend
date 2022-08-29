import { css } from 'styled-components';
import { breakpoint } from './breakpoint';

export const ResponsiveFontSize = css`
  ${() =>
    breakpoint.mb(css`
      font-size: 12px;
    `)}
  ${() =>
    breakpoint.tb(css`
      font-size: 12px;
    `)}
  ${() =>
    breakpoint.pc(css`
      font-size: 22px;
    `)}
`;
