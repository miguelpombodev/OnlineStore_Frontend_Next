export interface IProduct {
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
