import LandingPage from "../landingPage/LandingPage";
import Shop from "../Shop/Shop";
import Terms from "../TermsPage/Terms";
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
    path: "shop",
    element: <Shop />,
    title: "shop",
  },
  {
    path: "terms",
    element: <Terms />,
    title: "terms",
  },
];
export default pagesData;
