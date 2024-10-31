import Category from "./Category";
import CategoryStyles from "./Filters.module.css";
import { clearCart } from "./cartSlice";
import { useDispatch } from "react-redux";

const CategoriesFilters = ({ products }) => {
  const dispatch = useDispatch();
  const categories = products.map((product) => {
    return product.category;
  });

  const uniqueCategories = [...new Set(categories)];

  const categoryElements = uniqueCategories.map((category) => {
    return <Category key={category} categoryName={category} />;
  });

  return (
    <div className={CategoryStyles.filters}>
      <div>
        <h4>Choose a category:</h4>
        {categoryElements}
        <Category categoryName={"Clear filter"} isClearButton={true} />
        <div className={CategoryStyles.category}>
          <button
            style={{ backgroundColor: "purple" }}
            className={CategoryStyles["filter-btn"]}
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesFilters;
