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

  if (promotions === undefined) {
    return <p>Loading...</p>;
  }

  return (
    <Carousel
      images={promotions.map((promotion) => ({
        id: promotion.id,
        imageUrl: promotion.image,
        linkHref: promotion.link,
      }))}
    />
  );
};
