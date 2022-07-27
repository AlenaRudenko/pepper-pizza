export interface IMainPage {
  isActive: boolean;
  products: IPizza[];
  count: number;
  categories: number[];
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
