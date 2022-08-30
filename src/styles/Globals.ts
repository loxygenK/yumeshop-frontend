import { createGlobalStyle } from 'styled-components';
import { fonts } from './Tokens';
import 'ress';
import 'swiper/swiper.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${fonts.NotoSansJP};
    line-height: 1.5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
