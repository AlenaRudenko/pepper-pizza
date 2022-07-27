export interface IOrderState {
  isActive: boolean;
  basket: IBasket[];
  fullPrice: number;
}
export interface IBasket {
  id: string;
  imageUrl: string;
  price: number;
  size: string;
  title: string;
  variant: string;
  uniqueKey: number;
}
