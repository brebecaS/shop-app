import { useDispatch } from "react-redux";
import { setCategory } from "./categorySlice";

export default function Filter({ children, category }) {
  const dispatch = useDispatch();

  return (
    <div className="category">
      <button
        className="filter-btn"
        onClick={() => dispatch(setCategory(category))}
      >
        {children}
      </button>
    </div>
  );
}
