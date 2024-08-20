import Filter from "./Filter";

export default function Filters({ productsList, onCategoryChange }) {
  const allCategories = productsList.map((product) => {
    return product.category;
  });
  const uniqueCategories = [...new Set(allCategories)];

  const categoryElements = uniqueCategories.map((category) => {
    return (
      <div key={category}>
        <Filter onClick={onCategoryChange} category={category}>
          {category}
        </Filter>
      </div>
    );
  });

  return (
    <div className="filters">
      <div>
        <h4>Choose a category:</h4>

        {categoryElements}
       <Filter onClick={onCategoryChange} category={""}>
          Clear
       </Filter>
      </div>
    </div>
  );
}
