import Item from "./Item";

export interface CartItem extends Item {
  quantity: number;
  totalPrice: number;
}
