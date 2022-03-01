import Caroussel from '../Caroussel';
import { SwiperSlide } from 'swiper/react';
import * as S from './styles';

const CarrouselBannerContainer = () => (
  <S.Wrapper>
    <Caroussel>
      <Caroussel>
        <SwiperSlide>
          <img src="/assets/slide01.png" alt="slide01" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/slide02.png" alt="slide02" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/slide03.png" alt="slide03" />
        </SwiperSlide>
      </Caroussel>
    </Caroussel>
  </S.Wrapper>
);
export default CarrouselBannerContainer;
