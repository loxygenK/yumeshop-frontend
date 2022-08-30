import { Tag, TagProps } from 'src/components/atoms/Tag';
import { breakpoint } from 'src/styles/breakpoint';
import { spacingSizes } from 'src/styles/Tokens';
import styled, { css } from 'styled-components';

const TagsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  ${breakpoint.mb(css`
    gap: ${spacingSizes.xxs};
  `)}
  ${breakpoint.pc(css`
    gap: ${spacingSizes.sm};
  `)}
`;

export type TagsProps = {
  tags: TagProps[];
};

export const Tags = ({ tags }: TagsProps): JSX.Element => (
  <TagsWrapper>
    {tags.map((tag) => (
      <Tag key={tag.name} {...tag} />
    ))}
  </TagsWrapper>
);
