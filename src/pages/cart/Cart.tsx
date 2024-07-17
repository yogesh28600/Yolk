import { Button, Container } from "react-bootstrap";
import { useStore } from "../../stores/store";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";

import Product from "../../components/product/Product";

const Cart = () => {
  const { cartStore } = useStore();

  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center pt-5 mt-5 px-5"
    >
      {cartStore.items.length != 0 ? (
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {cartStore.items.map((item) => {
                return <Product key={item.id} item={item} />;
              })}
            </tbody>
          </table>
          <h4 className="align-self-end">Total Price: {cartStore.total}</h4>
          <Button variant="warning">Proceed</Button>
        </>
      ) : (
        <>
          <h2>No Items in the Cart</h2>
          <NavLink to="shop" className="btn btn-warning">
            Continue Shoping
          </NavLink>
        </>
      )}
    </Container>
  );
};

export default observer(Cart);
