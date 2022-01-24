import Main from 'components/Main';
import { GetServerSideProps } from 'next';
import api from 'services/api';

interface MainProps {
  products: IProduct[];
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

export default function Home({ products }: MainProps) {
  return <Main products={products} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get('/products');
  const products = data;

  return {
    props: {
      products
    }
  };
};
