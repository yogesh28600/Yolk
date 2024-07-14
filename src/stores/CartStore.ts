import Item from "../types/Item";

export class CartStore {
  items: Item[];

  constructor() {
    this.items = [];
  }

  GetItem(id: number): Item | number {
    const item = this.items.find((item) => {
      item.id === id;
    });
    return item ? item : -1;
  }

  set AddItem(item: Item) {
    this.items = [...this.items, item];
  }
}
