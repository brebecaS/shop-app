export default function Filters({productsList}) {
  const categoryElements = productsList.map(
    (product) => {
      return (
        <div className="category">
          <button className="filter-btn">{product.category}</button>
        </div>
      );
    }
  );

  return (
    <div className="filters">
      <div>
        <h4>Choose a category:</h4>

        {categoryElements}
      </div>
    </div>
  );
}
