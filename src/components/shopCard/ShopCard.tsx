interface ShopCardProps {
  item: Item;
}
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardSubtitle,
  CardTitle,
  Col,
} from "react-bootstrap";
import Item from "../../types/Item";
import { useStore } from "../../stores/store";
import { CartItem } from "../../types/CartItem";

const ShopCard = ({ item }: ShopCardProps) => {
  const { cartStore } = useStore();
  const cartItem: CartItem = {
    ...item,
    quantity: 1,
    totalPrice: item.price,
  };
  return (
    <Col className="g-2">
      <Card style={{ height: "308px", width: "210px" }}>
        <img src={item.image} height="150px" alt="" />
        <CardBody>
          <CardTitle>{item.title}</CardTitle>
          <CardSubtitle>Price: {item.price}</CardSubtitle>
        </CardBody>
        <CardFooter className="d-flex justify-content-center">
          <Button
            variant="warning"
            onClick={() => {
              cartStore.AddItem(cartItem);
            }}
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default ShopCard;
