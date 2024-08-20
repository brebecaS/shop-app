export default function Filter({ children, onClick, category }) {
  return (
    <div className="category">
      <button className="filter-btn" onClick={() => onClick(category)}>
        {children}
      </button>
    </div>
  );
}
