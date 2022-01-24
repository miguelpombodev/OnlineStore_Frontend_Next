import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwipperCore, {
  Autoplay,
  Navigation,
  Pagination,
  SwiperOptions
} from 'swiper';

SwipperCore.use([Navigation, Pagination, Autoplay]);

const Caroussel = () => {
  const carouselOptions: SwiperOptions = {
    navigation: true,
    pagination: true,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    }
  };

  return (
    <Swiper {...carouselOptions}>
      <SwiperSlide>
        <img src="/assets/slide01.png" alt="slide01" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/slide02.png" alt="slide02" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/slide03.png" alt="slide03" />
      </SwiperSlide>
    </Swiper>
  );
};
export default Caroussel;
