import { ResponsiveFontSize } from 'src/styles/responsives';
import { spacingSizes } from 'src/styles/Tokens';
import styled from 'styled-components';

export type TagProps = {
  name: string;
  color: string;
};

const TagWrapper = styled.li<Pick<TagProps, 'color'>>`
  display: inline flow-root;
  background-color: ${(props) => props.color};
  color: white;
  list-style: none;
  padding: 0 ${spacingSizes.xs};

  ${ResponsiveFontSize}
`;

export const Tag = ({ name, color }: TagProps): JSX.Element => (
  <TagWrapper color={color}>{name}</TagWrapper>
);
