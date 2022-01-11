import { ReactComponent as Arrow } from "assets/images/arrow.svg";
import "./styles.css";

export default function Pagination() {
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button
          className="dsmovie-pagination-button"
          disabled={true}
          title="Prev Page"
        >
          <Arrow />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button
          className="dsmovie-pagination-button"
          disabled={false}
          title="Next Page"
        >
          <Arrow className="dsmovie-flip-horizontal" />
        </button>
      </div>
    </div>
  );
}
