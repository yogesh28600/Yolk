// import { RiDeleteBin6Line } from "react-icons/ri";
// import { useState } from "react";
// import { useStore } from "../../stores/store";
// import { CartItem } from "../../types/CartItem";
// import { observer } from "mobx-react-lite";
// //Props
// interface cartItemProps {
//   item: CartItem;
// }
// const Product = ({ item }: cartItemProps) => {
//   const { cartStore } = useStore();
//   const [quantity, setQuantity] = useState<number>(item.quantity);
//   function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>): void {
//     const qty: number = +e.target.value; // + operator converts string to number
//     setQuantity(qty);
//     cartStore.changeQuantity(item.id, qty);
//   }
//   return (
//     <div className="cart-item-container">
//       <div className="cart-image-container">
//         <img src={item.image} alt="" />
//       </div>
//       <div className="cart-item-info-container">
//         <h3>{item.title}</h3>
//         <h5>Rs {item.price}</h5>
//         <h5>Rs {item.totalPrice}</h5>
//       </div>
//       <div className="quantity-container">
//         <input
//           type="number"
//           value={quantity}
//           onChange={(e) => {
//             onChangeHandler(e);
//           }}
//         />
//       </div>
//       <div className="remove-btn">
//         <button
//           onClick={() => {
//             cartStore.RemoveItem(item.id);
//           }}
//         >
//           <RiDeleteBin6Line size={20} />
//         </button>
//       </div>
//     </div>
//   );
// };

import { Button, InputGroup } from "react-bootstrap";
import { CartItem } from "../../types/CartItem";
import { MdDelete } from "react-icons/md";
import { useStore } from "../../stores/store";
import { observer } from "mobx-react-lite";
import { useState } from "react";

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
    <tr>
      <td>
        <img src={item.image} width={"50px"} alt="" />
      </td>
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td>
        <InputGroup style={{ width: "150px" }}>
          <Button
            onClick={() => {
              setQuantity(quantity - 1);
              cartStore.changeQuantity(item.id, quantity - 1);
            }}
          >
            -
          </Button>
          <input
            className="form-control px-2"
            type="text"
            inputMode={"numeric"}
            value={quantity}
            min={1}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />
          <Button
            onClick={() => {
              setQuantity(quantity + 1);
              cartStore.changeQuantity(item.id, quantity + 1);
            }}
          >
            +
          </Button>
        </InputGroup>
      </td>
      <td>
        <Button onClick={() => cartStore.RemoveItem(item.id)}>
          <MdDelete />
        </Button>
      </td>
    </tr>
  );
};

export default observer(Product);
