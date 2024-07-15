import { useState } from "react";
import { useStore } from "../../stores/store";
import { CartItem } from "../../types/CartItem";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./Cart.css";
//Props
interface cartItemProps {
  item: CartItem;
}
interface CartProps {
  openCart: React.Dispatch<React.SetStateAction<boolean>>;
}

//sub components
const Product = ({ item }: cartItemProps) => {
  const { cartStore } = useStore();
  const [quantity, setQuantity] = useState<number>(item.quantity);
  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    const qty: number = +e.target.value; // + operator converts string to number
    setQuantity(qty);
    cartStore.changeQuantity(item.id, qty);
  }
  return (
    <div className="cart-item-container">
      <div className="cart-image-container">
        <img src={item.image} alt="" />
      </div>
      <div className="cart-item-info-container">
        <h3>{item.title}</h3>
        <h5>Rs {item.price}</h5>
      </div>
      <div className="quantity-container">
        <input
          type="number"
          value={quantity}
          onChange={(e) => {
            onChangeHandler(e);
          }}
        />
      </div>
      <div className="remove-btn">
        <button
          onClick={() => {
            cartStore.RemoveItem(item.id);
          }}
        >
          <RiDeleteBin6Line size={20} />
        </button>
      </div>
    </div>
  );
};

//Main Component
const Cart = ({ openCart }: CartProps) => {
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

export default Cart;
