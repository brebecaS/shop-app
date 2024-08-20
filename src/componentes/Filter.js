import { useContext } from "react";

import { CategoryChangeContext } from "./App";

export default function Filter({ children, category }) {
  // 4. consume the shared state using useContext and the created context
  const handleCategoryChange = useContext(CategoryChangeContext);
  return (
    <div className="category">
      <button
        className="filter-btn"
        onClick={() => handleCategoryChange(category)}
      >
        {children}
      </button>
    </div>
  );
}
