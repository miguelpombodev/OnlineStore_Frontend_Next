import Main from 'components/Main';
import { GetServerSideProps } from 'next';
import api from 'services/api';

interface MainProps {
  maleShirts: IProduct[];
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

export default function Home({ maleShirts }: MainProps) {
  return <Main products={maleShirts} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get('/products', {
    params: { category: 'Camisa Masculina ' }
  });
  const maleShirts = data;

  return {
    props: {
      maleShirts
    }
  };
};
