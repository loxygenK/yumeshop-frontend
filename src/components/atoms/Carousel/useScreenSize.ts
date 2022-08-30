import { useEffect, useState } from 'react';

export type ScreenSize = {
  width: number;
  height: number;
};

const useScreenSize = (): ScreenSize | undefined => {
  const [size, setSize] = useState<ScreenSize>();

  useEffect(() => {
    const onScreenResize = () => {
      setSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      });
    };

    onScreenResize();

    window.addEventListener('resize', onScreenResize);

    return () => window.removeEventListener('resize', onScreenResize);
  }, []);

  return size;
};

const MAX_WIDTH = 600;
export const useCarouselElementSize = (): number => {
  const size = useScreenSize();

  if (size === undefined) {
    return MAX_WIDTH;
  }

  return Math.min(size.width, MAX_WIDTH);
};
