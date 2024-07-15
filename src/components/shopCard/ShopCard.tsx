import "./ShopCard.css";
import Item from "../../types/Item";
import { useStore } from "../../stores/store";
import { CartItem } from "../../types/CartItem";
interface Props {
  item: Item;
}
const ShopCard = ({ item }: Props) => {
  const { cartStore } = useStore();
  const cartItem: CartItem = {
    ...item,
    quantity: 1,
    totalPrice: item.price,
  };
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={item.image} alt="" />
      </div>
      <div className="info-container">
        <h6>{item.title}</h6>
        <h5>Price: RS {item.price}</h5>
      </div>
      <div className="footer">
        <button
          className="btn"
          onClick={() => {
            cartStore.AddItem(cartItem);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
