import ShopItems from "../Data/ShopItems";
import Item from "../types/Item";

export class ShopStore {
  items: Item[] = ShopItems;

  addItem(item: Item) {
    this.items = [...this.items, item];
  }

  removeItem(id: number) {
    const idx = this.items.findIndex((item) => {
      item.id === id;
    });
    this.items.splice(idx, 1);
  }
}
