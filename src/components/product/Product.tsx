import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import { useStore } from "../../stores/store";
import { CartItem } from "../../types/CartItem";
import { observer } from "mobx-react-lite";
import "./Product.css";
//Props
interface cartItemProps {
  item: CartItem;
}
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
        <h5>Rs {item.totalPrice}</h5>
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

export default observer(Product);
