import Category from "./Category";
import CategoryStyles from "./Filters.module.css";

const CategoriesFilters = ({ setCartItems, products }) => {
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
              setCartItems([]);
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
