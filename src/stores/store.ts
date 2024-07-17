import { createContext, useContext } from "react";
import { CartStore } from "./CartStore";
import { ShopStore } from "./ShopStore";
import { TeamStore } from "./TeamStore";
import HeroStore from "./HeroStore";
import ValuePropositionStore from "./ValuePropositionStore";

interface Store {
  cartStore: CartStore;
  shopStore: ShopStore;
  teamStore: TeamStore;
  heroStore: HeroStore;
  valuePropositionStore: ValuePropositionStore;
}

export const store: Store = {
  cartStore: new CartStore(),
  shopStore: new ShopStore(),
  teamStore: new TeamStore(),
  heroStore: new HeroStore(),
  valuePropositionStore: new ValuePropositionStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
