import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {

  const [showArchive, setShowArchive] = useState(false);

  return (
    <div className="home">

      {/* =========================
          HERO
      ========================= */}

      <section className="hero">
        <span className="hero-tag">
          SEM 6 · MINI PROJECT
        </span>

        <h1>
          Problem <br />
          Statements.
        </h1>

        <p className="hero-description">
          Our shortlisted engineering concepts and upcoming
          project ideas, exploring real-world problems.
        </p>
      </section>


      {/* =========================
          TEAM
      ========================= */}

      <section className="section">

        <p className="section-label">
          The Team
        </p>

        <h2>Our Team</h2>

        <div className="team-list">

          <div className="team-member">
            <div className="member-info">
              <h3>Ninad Kathe</h3>
            </div>
            <span className="roll-no">B-05</span>
          </div>

          <div className="team-member team-lead">
            <div className="member-info">
              <h3>
                Arya Mane
                <span className="role">Team Lead</span>
              </h3>
            </div>
            <span className="roll-no">B-26</span>
          </div>

          <div className="team-member">
            <div className="member-info">
              <h3>Madhura Manjrekar</h3>
            </div>
            <span className="roll-no">B-28</span>
          </div>

          <div className="team-member">
            <div className="member-info">
              <h3>Vibha Mastkar</h3>
            </div>
            <span className="roll-no">B-29</span>
          </div>

        </div>

      </section>


      {/* =========================
          PROJECTS
      ========================= */}

      <section className="section">

        <p className="section-label">
          Our Work
        </p>

        {/* PROJECT HEADING + ARCHIVE */}

        <div className="projects-heading">

          <h2>Project Ideas</h2>

          <button
            className={`archive-toggle ${showArchive ? "archive-open" : ""}`}
            onClick={() => setShowArchive(!showArchive)}
          >
            <span>▣</span>

            {showArchive ? "Hide Archive" : "Archive"}

            <span className="archive-count">02</span>

          </button>

        </div>


        {/* =========================
            CURRENT PROJECTS
        ========================= */}

        <div className="projects-grid">


          {/* PROJECT 03 - ACTIVE */}

          <Link to="/idea-3" className="project-card">

            <div className="project-meta">
              <span className="project-number">03</span>
              <span className="project-status active">
                Short Listed
              </span>
            </div>

            <h3>BOUNDCRYPT</h3>

            <p>
              An Android-focused secure digital-media access system
              that encrypts files into portable .n1n4d containers
              and uses backend-controlled device authorization
              to manage protected content access.
            </p>

            <span className="project-link">
              Explore Project →
            </span>

          </Link>


          {/* PROJECT 04 - PLACEHOLDER */}

          <Link to="/idea-4" className="project-card placeholder-project">

            <div className="project-meta">
              <span className="project-number">04</span>
              <span className="project-status upcoming">
                Upcoming
              </span>
            </div>

            <h3>Idea 04</h3>

            <p>
              Another engineering problem statement is currently
              being explored. Details and proposed solutions
              will be added soon.
            </p>

            <span className="project-link">
              Coming Soon →
            </span>

          </Link>


          {/* PROJECT 05 - PLACEHOLDER */}

          <Link to="/idea-5" className="project-card placeholder-project">

            <div className="project-meta">
              <span className="project-number">05</span>
              <span className="project-status upcoming">
                Upcoming
              </span>
            </div>

            <h3>Idea 05</h3>

            <p>
              Another potential engineering project is being
              explored. Its concept and implementation details
              will be revealed soon.
            </p>

            <span className="project-link">
              Coming Soon →
            </span>

          </Link>

        </div>


        {/* =========================
            ARCHIVED PROJECTS
        ========================= */}

        {showArchive && (

          <div className="archive-section">

            <div className="archive-heading">

              <div>
                <p className="section-label">
                  PREVIOUSLY EXPLORED
                </p>

                <h3>Archived Projects</h3>
              </div>

              <span className="archive-total">
                02 PROJECTS
              </span>

            </div>


            <div className="projects-grid">


              {/* PROJECT 01 */}

              <Link
                to="/idea-1"
                className="project-card archived-project"
              >

                <div className="project-meta">
                  <span className="project-number">01</span>

                  <span className="project-status archived">
                    Archived
                  </span>
                </div>

                <h3>
                  Dynamic Supply Chain Network Platform
                </h3>

                <p>
                  A configurable platform connecting fragmented
                  suppliers with aggregators, processors, buyers,
                  NGOs and other end users through dynamic
                  supply-chain management.
                </p>

                <span className="project-link">
                  View Project →
                </span>

              </Link>


              {/* PROJECT 02 */}

              <Link
                to="/idea-2"
                className="project-card archived-project"
              >

                <div className="project-meta">
                  <span className="project-number">02</span>

                  <span className="project-status archived">
                    Archived
                  </span>
                </div>

                <h3>
                  Smart Campus Equipment Management System
                </h3>

                <p>
                  A centralized system for tracking, reporting
                  and maintaining classroom and laboratory
                  equipment, including QR-based issue reporting
                  and lab readiness monitoring.
                </p>

                <span className="project-link">
                  View Project →
                </span>

              </Link>

            </div>

          </div>

        )}

      </section>


      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">
        SEM 6 MINI PROJECT · 2027
      </footer>

    </div>
  );
}

export default App;

