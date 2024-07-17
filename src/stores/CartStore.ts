import { makeAutoObservable } from "mobx";
import { CartItem } from "../types/CartItem";

export class CartStore {
  items: CartItem[] = [];
  totalItems: number = 0;
  total: number = 0;
  constructor() {
    makeAutoObservable(this);
  }
  GetItem(id: number): CartItem | null {
    const item = this.items.find((item) => item.id === id);
    return item ? item : null;
  }
  calculateTotal(): number {
    let price: number = 0;
    this.items.forEach((item) => (price += item.totalPrice));
    return price;
  }
  setTotalItems() {
    this.totalItems = this.items.length;
  }
  changeQuantity(id: number, qty: number) {
    if (qty >= 1) {
      const idx: number = this.items.findIndex((value) => value.id === id);
      this.items[idx].quantity = qty;
      this.items[idx].totalPrice = this.items[idx].price * qty;
      this.total = this.calculateTotal();
    }
  }
  AddItem(item: CartItem) {
    const cartitem: CartItem | null = this.GetItem(item.id);
    if (cartitem != null) {
      const qty = cartitem.quantity + 1;
      this.changeQuantity(item.id, qty);
    } else {
      this.items = [...this.items, item];
      this.total += item.price;
      this.setTotalItems();
    }
  }
  RemoveItem(id: number): void {
    const idx = this.items.findIndex((item) => item.id === id);
    this.items.splice(idx, 1);
    this.total = this.calculateTotal();
    this.setTotalItems();
  }
}
