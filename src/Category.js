const Category = (props) => {
  console.log(props.isClearButton);
  return (
    <div className="category">
      <button
        className="filter-btn"
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
