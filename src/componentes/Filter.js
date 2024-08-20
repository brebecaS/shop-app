export default function Filter({ children, categoryElements, category }) {
  return (
    <div className="category">
      <button className="filter-btn">{children}</button>
    </div>
  );
}
