import CarrouselBannerContainer from 'shared/components/CarrouselBannerContainer';
import CarrouselCardsContainer from 'shared/components/CarrouselCardsContainer';
import { IProduct } from 'shared/interfaces/products.interface';
import * as S from './styles';

interface MainProps {
  products: IProduct[];
}

export default function Main({ products }: MainProps) {
  return (
    <>
      <S.Container>
        <CarrouselBannerContainer />
        <CarrouselCardsContainer
          productCards={products}
          heading="Camisas Masculinas"
        />
      </S.Container>
    </>
  );
}
