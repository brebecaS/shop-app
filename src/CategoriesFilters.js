import Category from "./Category";
import CategoryStyles from "./Filters.module.css";

const CategoriesFilters = (props) => {
  const categories = [
    { name: "category1", isClearButton: false },
    { name: "category2", isClearButton: false },
    { name: "category3", isClearButton: false },
    { name: "Clear filter", isClearButton: true },
  ];

  const categoryElements = categories.map((category) => {
    return (
      <Category
        key={category.name}
        categoryName={category.name}
        setCategory={props.setSelectedCategory}
        isClearButton={category.isClearButton}
      />
    );
  });

  return (
    <div className={CategoryStyles.filters}>
      <div>
        <h4>Choose a category:</h4>
        {categoryElements}
      </div>
    </div>
  );
};

export default CategoriesFilters;
