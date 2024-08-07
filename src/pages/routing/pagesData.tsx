import Cart from "../cart/Cart";
import LandingPage from "../landingPage/LandingPage";
import Shop from "../Shop/Shop";
type route = {
  path: string;
  element: JSX.Element;
  title: string;
};
const pagesData: route[] = [
  {
    path: "",
    element: <LandingPage />,
    title: "landingPage",
  },
  {
    path: "/shop",
    element: <Shop />,
    title: "shop",
  },
  {
    path: "/cart",
    element: <Cart />,
    title: "cart",
  },
];
export default pagesData;
