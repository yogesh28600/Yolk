import "./ShopCard.css";
import comicCover from "../../assets/images/comic-book.jpg";
import Item from "../../types/Item";
import { CartStore } from "../../stores/CartStore";
interface Props {
  item: Item;
}
const ShopCard = ({ item }: Props) => {
  const cart = new CartStore();
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={comicCover} alt="" />
      </div>
      <div className="info-container">
        <h5>{item.title}</h5>
        <h6>Price: RS {item.price}</h6>
      </div>
      <div className="footer">
        <button
          className="add btn"
          onClick={() => {
            cart.AddItem(item);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
