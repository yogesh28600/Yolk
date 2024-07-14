import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./Nav.css";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const Nav = ({ setModal }: Props) => {
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
          <NavLink to="/" className="reset-link">
            Yolk
          </NavLink>
        </h2>
      </div>
      <a id="menu-icon">
        <IoMenu size={25} />
      </a>
      <ul id="nav-items" className="flex-space-between reset-list">
        <li>
          <NavLink to="shop" className="reset-link nav-btn">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="about" className="reset-link nav-btn">
            About
          </NavLink>
        </li>
        <li>
          <button
            className="reset-button nav-btn"
            onClick={() => {
              setModal(true);
            }}
          >
            Terms
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
