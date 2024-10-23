import CategoryStyles from "./Filters.module.css";

const Category = (props) => {
  return (
    <div className={CategoryStyles.category}>
      <button
        className={CategoryStyles["filter-btn"]}
        onClick={() => {
          if (props.isClearButton) props.setCategory("");
          else props.setCategory(props.categoryName);
        }}
      >
        {props.categoryName}
      </button>
    </div>
  );
};
export default Category;
