import styled from 'styled-components';
import NextImage from 'next/image';
import Slider from 'react-slick';
// import { useCarouselElementSize } from 'src/components/atoms/Carousel/useScreenSize';
import { useEffect, useRef, useState } from 'react';

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
  // const rawElementSize = useCarouselElementSize();
  // const elementSize = `${rawElementSize - 47}px`;

  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<string>('600px');

  useEffect(() => {
    const onScreenResize = () => {
      console.log(ref.current?.clientWidth);
      console.log(size);
      setSize(`${Math.min(ref.current?.clientWidth ?? 0, 600)}px`);
    };

    onScreenResize();

    window.addEventListener('resize', onScreenResize);

    return () => window.removeEventListener('resize', onScreenResize);
  }, [ref.current?.clientWidth, size, setSize]);

  return (
    <CarouselWrapper ref={ref} height={size}>
      <Slider centerMode dots infinite variableWidth centerPadding="0px">
        {images.map((image) => (
          <LinkedImage
            size={size}
            style={{ width: size }}
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
