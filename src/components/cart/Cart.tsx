import { useStore } from "../../stores/store";
import Product from "../product/Product";
import "./Cart.css";
import { observer } from "mobx-react-lite";

interface CartProps {
  openCart: React.Dispatch<React.SetStateAction<boolean>>;
}

//Main Component
export const Cart = ({ openCart }: CartProps) => {
  const { cartStore } = useStore();
  return (
    <div id="cart">
      <div className="close-icon-container">
        <button
          className="reset-button nav-btn"
          onClick={() => {
            openCart(false);
          }}
        >
          close
        </button>
      </div>
      {cartStore.items.length != 0 ? (
        <>
          <div className="cart-items-container">
            {cartStore.items.map((item) => {
              return <Product key={item.id} item={item} />;
            })}
          </div>
          <div className="total-price-container">
            <h3>Total Price: Rs {cartStore.total}</h3>
          </div>
          <button className="buy-btn-container btn">Proceed</button>
        </>
      ) : (
        <h1 className="text">No Items in cart</h1>
      )}
    </div>
  );
};

export default observer(Cart);
