import styled from 'styled-components';
import NextImage from 'next/image';
import Slider from 'react-slick';

const CarouselWrapper = styled.div`
  height: 600px;
`;

const LinkedImage = styled.a`
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
  <CarouselWrapper>
    <Slider centerMode dots infinite variableWidth>
      {images.map((image) => (
        <LinkedImage
          style={{ width: '600px' }}
          key={image.id}
          href={image.linkHref}
        >
          <NextImage src={image.imageUrl} layout="fill" />
        </LinkedImage>
      ))}
    </Slider>
  </CarouselWrapper>
);
