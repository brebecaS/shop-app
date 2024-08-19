export default function Filters() {
  const categoryElements = ["category1", "category2", "category3"].map(
    (category) => {
      return (
        <div className="category">
          <button className="filter-btn">{category}</button>
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
