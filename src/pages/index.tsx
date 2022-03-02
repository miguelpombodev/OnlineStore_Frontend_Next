import { GetServerSideProps } from 'next';
import ProductServices from 'services/Products/ProductServices';
import CarrouselBannerContainer from 'shared/components/CarrouselBannerContainer';
import CarrouselCardsContainer from 'shared/components/CarrouselCardsContainer';

interface MainProps {
  maleShirts: IProduct[];
  maleShoes: IProduct[];
}

interface IProduct {
  Id: string;
  TypeId: number;
  Sku: string;
  Name: string;
  Value: number;
  StockAmount: number;
  Colors: ProductColors[];
}

interface ProductColors {
  Id: string;
  ProductColorUrl: string;
  Name: string;
}

export default function Home({ maleShirts, maleShoes }: MainProps) {
  return (
    <>
      <CarrouselBannerContainer />
      <CarrouselCardsContainer
        productCards={maleShirts}
        heading="Camisas Masculinas"
      />
      <CarrouselCardsContainer
        productCards={maleShoes}
        heading="Tênis Masculino"
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const _productServices = new ProductServices();

  const maleShirts = await _productServices.getCategorizedProduct(
    'Camisa Masculina'
  );

  const maleShoes = await _productServices.getCategorizedProduct(
    'Tênis Masculino'
  );

  return {
    props: {
      maleShirts,
      maleShoes
    }
  };
};
