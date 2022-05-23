export interface IMainPage {
  isActive: boolean;
  products: IPizza[];
  basket: IBasketPizza[];
}
export interface IBasketPizza {
  id: string;
  name: string;
  img: string;
  price: number;
  count: number;
  variant: string;
  size: number;
}
export interface IPizza {
  id: string;
  img: string;
  options: string[];
  price: number;
  rating: number;
  title: string;
}
