import { useMemo } from 'react';
import { Carousel } from 'src/components/atoms/Carousel';
import useSWR from 'swr';

export type PromotionResponse = {
  id: string;
  title: string;
  image: string;
  detail: string;
  link: string;
};

export const PromotionsCarousel = (): JSX.Element => {
  const { data: promotions } = useSWR<PromotionResponse[]>('/promotions');

  const images = useMemo(
    () =>
      promotions?.map((promotion) => ({
        id: promotion.id,
        imageUrl: promotion.image,
        linkHref: promotion.link,
      })),
    [promotions],
  );

  if (images === undefined) {
    return <p>Loading...</p>;
  }

  return <Carousel images={images} />;
};
