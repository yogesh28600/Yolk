import { CartItem } from "../types/CartItem";

export class CartStore {
  items: CartItem[] = [];
  total: number = 0;

  GetItem(id: number): CartItem | number {
    const item = this.items.find((item) => item.id === id);

    return item ? item : -1;
  }
  calculateTotal(): number {
    let price: number = 0;
    this.items.forEach((item) => (price += item.totalPrice));
    return price;
  }
  changeQuantity(id: number, qty: number) {
    const idx: number = this.items.findIndex((value) => value.id === id);
    this.items[idx].quantity = qty;
    this.items[idx].totalPrice = this.items[idx].price * qty;
    this.total = this.calculateTotal();
  }
  AddItem(item: CartItem) {
    const cartitem: CartItem | number = this.GetItem(item.id);
    if (cartitem != -1) {
      const qty = item.quantity + 1;
      this.changeQuantity(item.id, qty);
    } else {
      this.items = [...this.items, item];
      this.total += item.price;
    }
  }
  RemoveItem(id: number): void {
    const idx = this.items.findIndex((item) => item.id === id);
    // this.total -= this.items[idx].totalPrice;
    this.items.splice(idx, 1);
    this.total = this.calculateTotal();
  }
}
