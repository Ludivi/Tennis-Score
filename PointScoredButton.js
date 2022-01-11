// on import useDispatch depuis react-redux
// on import useDispatch depuis react-redux
import { useDispatch } from "react-redux";
import { pointScored } from "./store";

export function PointScoredButton({ playerId, children }) {
  const dispatch = useDispatch();

  return (
    <button
      className="button"
      onClick={() => {
        dispatch(pointScored(playerId));
      }}
    >
      {children}
    </button>
  );
}
