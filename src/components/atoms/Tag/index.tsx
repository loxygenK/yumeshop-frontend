import { VFC } from 'react';

export interface TagProps {
  children: string;
  color: string;
}
export const Tag: VFC<TagProps> = ({ children, color }) => (
  <div>{children}</div>
);
