import { BrowserRouter } from "react-router-dom";
import Router from "./pages/routing/router";
import NavigationMenu from "./components/navbar/NavigationMenu";
function App() {
  return (
    <BrowserRouter>
      <NavigationMenu />
      <Router />
    </BrowserRouter>
  );
}

export default App;
