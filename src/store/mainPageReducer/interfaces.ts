export interface IMainPage {
  isActive: boolean;
  products: IPizza[];
  basket: IBasketPizza[];
  count: number;
}
export interface IBasketPizza {
  id: string;
  imageUrl: string;
  price: number;
  size: string;
  title: string;
  variant: string;
}

export interface IPizza {
  category: number;
  id: string;
  imageUrl: string;
  price: number;
  rating: number;
  sizes: number[];
  title: string;
  types: number[];
}
