import { Link } from "react-router-dom";
import "./styles/global.css";

function Idea5() {
  return (
    <div className="idea-page idea-theme-2">

      <main className="idea-main section">

        <Link to="/" className="text-muted">
          ← Back to Projects
        </Link>

        <div style={{ marginTop: "100px" }}>

          <span className="text-label">
            SEM 6 · MINI PROJECT · IDEA 05
          </span>

          <h1 className="type-main-heading" style={{ marginTop: "20px" }}>
            Coming Soon.
          </h1>

          <p className="type-body text-muted" style={{ marginTop: "20px" }}>
            Another potential engineering concept is under
            exploration. Its problem statement and proposed
            solution will be announced soon.
          </p>

          <span className="idea-chip" style={{ marginTop: "30px" }}>
            Upcoming Project
          </span>

        </div>

      </main>

    </div>
  );
}

export default Idea5;