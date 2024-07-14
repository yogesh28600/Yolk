import ShopCard from "../../components/shopCard/ShopCard";
import "./Shop.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import Cart from "../../components/cart/Cart";
import { useStore } from "../../stores/store";

//Props
interface ShopNavProps {
  openCart: React.Dispatch<React.SetStateAction<boolean>>;
}

//sub-Componets
const ShopNav = ({ openCart }: ShopNavProps) => {
  return (
    <nav
      id="nav-bar"
      className="flex-space-between bg"
      style={{ position: "fixed" }}
    >
      <div className="brand">
        <h2 id="brand-name">
          <NavLink to="/" className="reset-link">
            Yolk
          </NavLink>
        </h2>
      </div>
      <ul id="nav-items" className="flex-space-between reset-list">
        <li>
          <button
            className="reset-button nav-btn cart"
            onClick={() => {
              openCart(true);
            }}
          >
            <FiShoppingCart size={25} />
            Cart
          </button>
        </li>
      </ul>
    </nav>
  );
};

//Main Component
const Shop = () => {
  const [cartModal, setCartModal] = useState<boolean>(false);
  const { shopStore } = useStore();
  return (
    <main id="shop">
      <ShopNav openCart={setCartModal} />
      <div className="items-container">
        {shopStore.items.map((item) => {
          return <ShopCard key={item.id} item={item} />;
        })}
      </div>
      {cartModal && <Cart />}
    </main>
  );
};
export default Shop;
