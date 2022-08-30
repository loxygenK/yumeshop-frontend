import { Tag, TagProps } from 'src/components/atoms/Tag';
import { spacingSizes } from 'src/styles/Tokens';
import styled from 'styled-components';

const TagsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacingSizes.xxs};
  align-items: center;
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
