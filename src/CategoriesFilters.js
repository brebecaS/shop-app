import Category from "./Category";

const CategoriesFilters = () => {
  return (
    <div className="filters">
      <div>
        <h4>Choose a category:</h4>
        <Category categoryName={"category1"} />
        <Category categoryName={"category2"} />
        <Category categoryName={"category3"} />
      </div>
    </div>
  );
};

export default CategoriesFilters;
