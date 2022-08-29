import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import NextImage from 'next/image';
import { rounding, shadows, spacingSizes } from 'src/styles/Tokens';
import { breakpoint } from 'src/styles/breakpoint';

const CardWrapper = styled.article`
  box-shadow: ${shadows.md};

  width: fit-content;
  border-radius: ${rounding.md};
`;

const Image = styled.section`
  position: relative;

  ${breakpoint.mb(css`
    width: 200px;
    height: 200px;
  `)}
  ${breakpoint.pc(css`
    width: 244px;
    height: 244px;
  `)}
`;

const Content = styled.section`
  ${breakpoint.mb(css`
    padding: 0 ${spacingSizes.xs};
  `)}
  ${breakpoint.pc(css`
    padding: ${spacingSizes.xs};
  `)}
`;

export type SimpleCardProps = {
  children: ReactNode;
  imageUrl: string;
};

export const SimpleCard = ({
  children,
  imageUrl,
}: SimpleCardProps): JSX.Element => (
  <CardWrapper>
    <Image>
      <NextImage src={imageUrl} layout="fill" />
    </Image>
    <Content>{children}</Content>
  </CardWrapper>
);
