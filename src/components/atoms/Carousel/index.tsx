import styled from 'styled-components';
import NextImage from 'next/image';
import Slider from 'react-slick';
import { useCarouselElementSize } from 'src/components/atoms/Carousel/useScreenSize';

const CarouselWrapper = styled.div<{ height: string }>`
  height: ${(props) => props.height};
`;

const LinkedImage = styled.a<{ size: string }>`
  position: relative;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

export type CarouselImage = {
  id: string;
  imageUrl: string;
  linkHref: string;
};
export type CarouselProps = {
  images: CarouselImage[];
};
export const Carousel = ({ images }: CarouselProps): JSX.Element => {
  const rawElementSize = useCarouselElementSize();
  const elementSize = `${rawElementSize}px`;

  return (
    <CarouselWrapper height={elementSize}>
      <Slider centerMode dots infinite variableWidth>
        {images.map((image) => (
          <LinkedImage
            size={elementSize}
            style={{ width: elementSize }}
            key={image.id}
            href={image.linkHref}
          >
            <NextImage src={image.imageUrl} layout="fill" />
          </LinkedImage>
        ))}
      </Slider>
    </CarouselWrapper>
  );
};
