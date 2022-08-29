import { FlattenSimpleInterpolation, css } from 'styled-components';

type Breakpoints = 'mb' | 'tb' | 'pc';

type BreakpointFn = (
  style: FlattenSimpleInterpolation,
) => FlattenSimpleInterpolation;

export const breakpoint: Record<Breakpoints, BreakpointFn> = {
  mb: (mb) => css`
    ${mb}
  `,
  tb: (tb) => css`
    @media (min-width: 640px) {
      ${tb}
    }
  `,
  pc: (pc) => css`
    @media (min-width: 768px) {
      ${pc}
    }
  `,
};
