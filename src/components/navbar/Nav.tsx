import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./Nav.css";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const Nav = () => {
  useGSAP(() => {
    gsap.from("#nav-bar", {
      y: "-200%",
      duration: 1,
      delay: 0.5,
    });
  });
  return (
    <nav id="nav-bar" className="flex-space-between">
      <div className="brand">
        <h2 id="brand-name">
          <a href="#hero" className="link-style">
            Yolk
          </a>
        </h2>
      </div>
      <a id="menu-icon">
        <IoMenu size={25} />
      </a>
      <ul id="nav-items" className="flex-space-between">
        <li>
          <NavLink to="shop" className="link-style">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="about" className="link-style">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/terms" className="link-style">
            Terms
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
