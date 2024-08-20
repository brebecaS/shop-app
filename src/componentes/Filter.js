import { useContext } from "react";

import { ChangeContext } from "./App";

export default function Filter({ children, category }) {
  // 4. consume the shared state using useContext and the created context
  const { handleCategoryChange } = useContext(ChangeContext);
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
