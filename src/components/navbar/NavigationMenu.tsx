import { Button, Container, Navbar, NavbarBrand } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { SiShopee } from "react-icons/si";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import logo from "../../assets/images/logo.jpg";
import { FaShoppingCart } from "react-icons/fa";
import { useStore } from "../../stores/store";
import { observer } from "mobx-react-lite";

const NavigationMenu = () => {
  const { cartStore } = useStore();
  const mouseEnterHandler = () => {
    gsap.to("#brand-name", {
      x: "0",
      duration: 1,
    });
  };
  const mouseLeaveHandler = () => {
    gsap.to("#brand-name", {
      x: "-200%",
      duration: 1,
    });
  };
  useGSAP(() => {
    gsap.from("#navigation-bar", {
      y: "-200%",
      duration: 1,
      delay: 0.5,
    });
    gsap.to("#brand-name", {
      x: "-200%",
      duration: 0,
    });
  });
  return (
    <Navbar
      id="navigation-bar"
      fixed="top"
      className="p-3"
      style={{ backgroundColor: "white" }}
    >
      <Container fluid={true} className="p-0">
        <NavLink to="/" style={{ zIndex: "1000" }}>
          <NavbarBrand
            onMouseEnter={() => {
              mouseEnterHandler();
            }}
            onMouseLeave={() => {
              mouseLeaveHandler();
            }}
          >
            <img src={logo} height={"40px"} alt="" />
          </NavbarBrand>
        </NavLink>
        <div
          style={{
            width: "50px",
            height: "60px",
            position: "absolute",
            top: "0",
            left: "0",
            backgroundColor: "white",
            zIndex: "900",
          }}
        ></div>
        <h4 id="brand-name">Yolk</h4>
        <Container fluid className="d-flex justify-content-end gap-3">
          <NavLink to="shop" className="btn btn-primary">
            <Container fluid className="p-0 d-flex align-items-center">
              <SiShopee />
              <Container fluid className="ps-1 pe-0">
                Store
              </Container>
            </Container>
          </NavLink>
          <Button>Terms</Button>
          <NavLink to="cart" className="btn btn-secondary position-relative">
            <FaShoppingCart />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartStore.totalItems}
              <span className="visually-hidden">Items in cart</span>
            </span>
          </NavLink>
        </Container>
      </Container>
    </Navbar>
  );
};

export default observer(NavigationMenu);
