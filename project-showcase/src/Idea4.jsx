import { Link } from "react-router-dom";
import "./styles/global.css";

function Idea4() {
  return (
    <div className="idea-page idea-theme-1">

      <main className="idea-main section">

        <Link to="/" className="text-muted">
          ← Back to Projects
        </Link>

        <div style={{ marginTop: "100px" }}>

          <span className="text-label">
            SEM 6 · MINI PROJECT · IDEA 04
          </span>

          <h1 className="type-main-heading" style={{ marginTop: "20px" }}>
            Coming Soon.
          </h1>

          <p className="type-body text-muted" style={{ marginTop: "20px" }}>
            A new engineering problem statement is currently
            being explored. More details will be revealed soon.
          </p>

          <span className="idea-chip" style={{ marginTop: "30px" }}>
            Upcoming Project
          </span>

        </div>

      </main>

    </div>
  );
}

export default Idea4;