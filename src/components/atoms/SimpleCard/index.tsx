import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import NextImage from 'next/image';
import { fontSizes, roundings, shadows, spacingSizes } from 'src/styles/Tokens';
import { breakpoint } from 'src/styles/breakpoint';

const CardWrapper = styled.article`
  ${breakpoint.mb(css`
    font-size: ${fontSizes.fontSize12};
  `)}
  ${breakpoint.pc(css`
    font-size: ${fontSizes.fontSize18};
  `)}

  box-shadow: ${shadows.md};
  width: fit-content;
  border-radius: ${roundings.md};
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

const RoundedNextImage = styled(NextImage)`
  border-radius: ${roundings.md} ${roundings.md} 0 0;
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
      <RoundedNextImage src={imageUrl} layout="fill" />
    </Image>
    <Content>{children}</Content>
  </CardWrapper>
);
