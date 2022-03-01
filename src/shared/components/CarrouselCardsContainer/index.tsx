import { IProduct } from 'shared/interfaces/products.interface';
import { SwiperOptions } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import Caroussel from '../Caroussel';
import ProductCards from '../ProductCards';
import * as S from './styles';

interface ICarrouselContainer {
  productCards: IProduct[];
  heading: string;
}

const CarrouselCardsContainer = ({
  productCards,
  heading
}: ICarrouselContainer) => {
  const config: SwiperOptions = {
    slidesPerView: 4,
    autoplay: false,
    loop: true,
    navigation: true
  };

  return (
    <S.Container>
      <S.Heading>{heading}</S.Heading>
      <S.CarouselWrapper>
        <Caroussel config={config}>
          {productCards.map((card, i) => (
            <SwiperSlide key={i}>
              <ProductCards
                Name={card.Name}
                ProductUrl={card.Colors[0].ProductColorUrl}
                StockAmount={card.StockAmount}
                Value={card.Value}
              />
            </SwiperSlide>
          ))}
        </Caroussel>
      </S.CarouselWrapper>
    </S.Container>
  );
};
export default CarrouselCardsContainer;
