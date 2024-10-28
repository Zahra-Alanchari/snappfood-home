export interface RootState {
  product: {
    product: Product["data"];
    id: number | null;
  };
  item: {
    item: Product["data"];
    id: number | null;
  };
  newItem: {
    newItem: Product["data"];
    id: number | null;
  };
  giftItem: {
    giftItem: Product["data"];
    id: number | null;
  };
  
}

export interface Product {
  data: Array<ProductDetail>;
  title: string
}
export interface ProductDetail {
  id: number;
  category: string;
  name: string;
  hasOff: boolean;
  image: string;
  headerImage: string;
  score: string;
  express: boolean;
  deliveryPrice: string;
  star: string;
  // off: string;
  // copon: string;
}
