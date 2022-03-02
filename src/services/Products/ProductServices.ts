import api from 'services/api';
import { IProduct } from 'shared/interfaces/products.interface';

class ProductServices {
  async getCategorizedProduct(category: string): Promise<IProduct[]> {
    const { data } = await api.get('/products', {
      params: { category: category }
    });

    return data;
  }
}

export default ProductServices;
