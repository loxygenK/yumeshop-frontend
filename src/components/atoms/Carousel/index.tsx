import styled from 'styled-components';
import NextImage from 'next/image';
import Slider from 'react-slick';
import { useEffect, useRef, useState } from 'react';

const IMAGE_MAX_SIZE_PX = 600;

const CarouselWrapper = styled.div<{ size: string }>`
  height: ${(props) => props.size};
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
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<string>(`${IMAGE_MAX_SIZE_PX}px`);

  useEffect(() => {
    const onScreenResize = () => {
      setSize(
        `${Math.min(ref.current?.clientWidth ?? 0, IMAGE_MAX_SIZE_PX)}px`,
      );
    };

    onScreenResize();

    window.addEventListener('resize', onScreenResize);

    return () => window.removeEventListener('resize', onScreenResize);
  }, [ref.current?.clientWidth, setSize]);

  return (
    <CarouselWrapper ref={ref} size={size}>
      <Slider centerMode dots infinite variableWidth centerPadding="0px">
        {images.map((image) => (
          <LinkedImage
            size={size}
            // This is to override the `style` attribute set by `react-slick`.
            // refer: https://react-slick.neostack.com/docs/example/variable-width
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
