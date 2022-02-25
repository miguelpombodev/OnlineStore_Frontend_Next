import Caroussel from 'shared/components/Caroussel';
import ProductCards from 'shared/components/ProductCards';
import { IProduct } from 'shared/interfaces/products.interface';
import * as S from './styles';

interface MainProps {
  products: IProduct[];
}

export default function Main({ products }: MainProps) {
  return (
    <>
      <Caroussel />
      <S.Container>
        <S.ProductsList>
          {products.map((prd) => (
            <S.ProductsListItem key={prd.Id}>
              <ProductCards
                Name={prd.Name}
                Value={prd.Value}
                StockAmount={prd.StockAmount}
                ProductUrl={prd.Colors[0].ProductColorUrl}
              />
            </S.ProductsListItem>
          ))}
        </S.ProductsList>
      </S.Container>
    </>
  );
}
