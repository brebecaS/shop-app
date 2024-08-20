export default function Filter({ children }) {
  return (
    <div className="category">
      <button className="filter-btn">{children}</button>
    </div>
  );
}
