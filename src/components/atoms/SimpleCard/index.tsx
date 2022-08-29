import { ReactNode } from 'react';

export type SimpleCardProps = {
  children: ReactNode;
  imageUrl: string;
};
export const SimpleCard = ({
  children,
  imageUrl,
}: SimpleCardProps): JSX.Element => (
  <div>
    {imageUrl}
    {children}
  </div>
);
