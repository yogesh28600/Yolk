import { createContext, useContext } from "react";
import { CartStore } from "./CartStore";
import { ShopStore } from "./ShopStore";
import { TeamStore } from "./TeamStore";

interface Store {
  cartStore: CartStore;
  shopStore: ShopStore;
  teamStore: TeamStore;
}

export const store: Store = {
  cartStore: new CartStore(),
  shopStore: new ShopStore(),
  teamStore: new TeamStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
