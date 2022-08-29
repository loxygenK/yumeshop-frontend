import { Tag, TagProps } from 'src/components/atoms/Tag';

export type TagsProps = {
  tags: TagProps[];
};

export const Tags = ({ tags }: TagsProps): JSX.Element => (
  <ul>
    {tags.map((tag) => (
      <Tag key={tag.name} {...tag} />
    ))}
  </ul>
);
