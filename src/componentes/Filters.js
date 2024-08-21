import Filter from "./Filter";
import { useSelector } from "react-redux";

export default function Filters() {
  const productsList = useSelector((state) => state.products.products);

  const allCategories = productsList.map((product) => {
    return product.category;
  });
  const uniqueCategories = [...new Set(allCategories)];

  const categoryElements = uniqueCategories.map((category) => {
    return (
      <div key={category}>
        <Filter category={category}>{category}</Filter>
      </div>
    );
  });

  return (
    <div className="filters">
      <div>
        <h4>Choose a category:</h4>

        {categoryElements}
        <Filter category={""}>Clear</Filter>
      </div>
    </div>
  );
}
