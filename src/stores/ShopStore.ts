import ShopItems from "../Data/ShopItems";
import Item from "../types/Item";

export class ShopStore {
  items: Item[] = ShopItems;

  set addItem(item: Item) {
    this.items = [...this.items, item];
  }

  set removeItem(id: number) {
    const idx = this.items.findIndex((item) => {
      item.id === id;
    });
    this.items.splice(idx, 1);
  }
}
