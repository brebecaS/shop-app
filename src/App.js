import "./Menu.css";
import "./Filters.css";
import "./Cart.css";
import "./App.css";

import Products from "./Products";
import CategoriesFilters from "./CategoriesFilters";
import Cart from "./Cart";

function App() {
  return (
    <div className="wrapper">
      <CategoriesFilters />

      <Products />

      <Cart />
    </div>
  );
}

export default App;
