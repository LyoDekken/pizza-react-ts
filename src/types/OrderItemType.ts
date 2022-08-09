import { ProductResponse } from "./Products";

export interface OrderItemType {
  product: ProductResponse;
  quantity: number;
  observation?: string;
}
