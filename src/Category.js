import CategoryStyles from "./Filters.module.css";

const Category = ({ isClearButton, setCategory, categoryName }) => {
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
