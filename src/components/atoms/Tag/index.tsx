import { breakpoint } from 'src/styles/breakpoint';
import { spacingSizes } from 'src/styles/Tokens';
import styled, { css } from 'styled-components';

export type TagProps = {
  name: string;
  color: string;
};

const TagWrapper = styled.li<Pick<TagProps, 'color'>>`
  display: inline flow-root;
  background-color: ${(props) => props.color};
  color: white;
  list-style: none;

  ${breakpoint.mb(css`
    font-size: 12px;
    padding: 0 ${spacingSizes.xxs};
  `)}
  ${breakpoint.pc(css`
    font-size: 22px;
    padding: 0 ${spacingSizes.xs};
  `)}
`;

export const Tag = ({ name, color }: TagProps): JSX.Element => (
  <TagWrapper color={color}>{name}</TagWrapper>
);
