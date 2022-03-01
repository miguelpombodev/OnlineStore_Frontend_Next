import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Swiper } from 'swiper/react';
import SwipperCore, {
  Autoplay,
  Navigation,
  Pagination,
  SwiperOptions
} from 'swiper';
import ICarousselProps from './ICarousselProps';

SwipperCore.use([Navigation, Pagination, Autoplay]);

const Caroussel = ({ config, children }: ICarousselProps) => {
  const carouselOptions: SwiperOptions = {
    navigation: true,
    pagination: true,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    }
  };

  return <Swiper {...(config ? config : carouselOptions)}>{children}</Swiper>;
};
export default Caroussel;
