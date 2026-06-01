import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MatchCard from "../components/MatchCard";
import fixturesData from "../data/fixturesData";

function Fixtures() {
  const [favTeam, setFavTeam] = useState("");

  useEffect(() => {
    const savedTeam = localStorage.getItem("favTeam");

    if (savedTeam) {
      setFavTeam(savedTeam);
    }
  }, []);

  return (
    <section className="fixtures-section">
      <h2>🗓️ Match Results</h2>
      <div className="fixture-legend">
        <span className="legend-win">🟢 Win</span>
        <span className="legend-loss">🔴 Loss</span>
        <span className="legend-nr">🟣 No Result</span>
      </div>

      <div className="fixtures-container">
        {fixturesData.map((match, index) => (
          <MatchCard
            key={index}
            matchNumber={match.matchNumber}
            team1={match.team1}
            team2={match.team2}
            result={match.result}
            favTeam={favTeam}
          />
        ))}

        <Link to="/playoffs" className="playoff-redirect">
          <div className="playoff-card">
            <h3>🏆 Top 4 Qualified</h3>
            <p>CSK • MI • GT • RCB</p>
            <span>Click to View Playoffs →</span>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Fixtures;