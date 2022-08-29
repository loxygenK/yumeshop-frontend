import { VFC } from 'react';
import { spacingSizes } from 'src/styles/Tokens';
import styled from 'styled-components';

export type TagProps = {
  children: string;
  color: string;
};

const TagWrapper = styled.li<Pick<TagProps, 'color'>>`
  display: inline flow-root;
  background: ${(props) => props.color};
  list-style: none;
  padding: 0 ${spacingSizes.xs};
`;

export const Tag: VFC<TagProps> = ({ children, color }) => (
  <TagWrapper color={color}>{children}</TagWrapper>
);
