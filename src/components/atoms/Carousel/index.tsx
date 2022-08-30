export type CarouselImage = {
  imageUrl: string;
  linkHref: string;
};
export type CarouselProps = {
  images: CarouselImage[];
};
export const Carousel = ({ images }: CarouselProps): JSX.Element => (
  <div>{images.length}</div>
);
