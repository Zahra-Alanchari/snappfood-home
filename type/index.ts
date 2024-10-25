export interface RootState {
    product: {
      product: Product["data"];
      id: number | null;
    };
  }

  export interface Product {
    data: Array<ProductDetail>;
  }
  export interface ProductDetail {
    id: number;
    category: string,
    name: string,
    hasOff: boolean,
    image:string,

    
  }