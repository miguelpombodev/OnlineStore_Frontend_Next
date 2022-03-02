import CarrouselBannerContainer from 'shared/components/CarrouselBannerContainer';
import CarrouselCardsContainer from 'shared/components/CarrouselCardsContainer';
import { IProduct } from 'shared/interfaces/products.interface';
import * as S from './styles';

interface MainProps {
  children: React.ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <>
      <S.Container>{children}</S.Container>
    </>
  );
}
