const Category = (props) => {
  return (
    <div className="category">
      <button className="filter-btn">{props.categoryName}</button>
    </div>
  );
};
export default Category;
