import CategoryStyles from "./Filters.module.css";
import { useContext } from "react";
import { SelectCategoryContext } from "./App";

const Category = ({ isClearButton, categoryName }) => {
  const setCategory = useContext(SelectCategoryContext);
  return (
    <div className={CategoryStyles.category}>
      <button
        className={CategoryStyles["filter-btn"]}
        onClick={() => {
          if (isClearButton) setCategory("");
          else setCategory(categoryName);
        }}
      >
        {categoryName}
      </button>
    </div>
  );
};
export default Category;
