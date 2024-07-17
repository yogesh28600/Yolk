import { Container, Row } from "react-bootstrap";
import { useStore } from "../../stores/store";
import ShopCard from "../../components/shopCard/ShopCard";

const Shop = () => {
  const { shopStore } = useStore();
  return (
    <Container fluid className="mt-4 pt-5 px-5">
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 ">
        {shopStore.items.map((item) => {
          return <ShopCard key={item.id} item={item} />;
        })}
      </Row>
    </Container>
  );
};

export default Shop;
