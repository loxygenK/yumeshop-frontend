import styled from 'styled-components';
import NextImage from 'next/image';
import Slider from 'react-slick';

const Image = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
`;

export type CarouselImage = {
  id: string;
  imageUrl: string;
  linkHref: string;
};
export type CarouselProps = {
  images: CarouselImage[];
};
export const Carousel = ({ images }: CarouselProps): JSX.Element => (
  <div style={{ height: '600px' }}>
    <Slider centerMode dots infinite variableWidth>
      {images.map((image) => (
        <Image style={{ width: '600px' }} key={image.id}>
          <NextImage src={image.imageUrl} layout="fill" />
        </Image>
      ))}
    </Slider>
  </div>
);
