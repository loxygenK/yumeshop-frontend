import { TagProps } from 'src/components/atoms/Tag';
import { Tags } from '../Tags';

export type WideCardProps = {
  date: string;
  tags: TagProps[];
  text: string;
};
export const WideCard = ({ date, tags, text }: WideCardProps): JSX.Element => (
  <div>
    {/* TODO: add `datetime` props */}
    <time>{date}</time>
    <Tags tags={tags} />
    <p>{text}</p>
  </div>
);
