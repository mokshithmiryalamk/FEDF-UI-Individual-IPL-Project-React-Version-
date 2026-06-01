import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TeamCard from "../components/TeamCard";

function Home() {
  const [team, setTeam] = useState("");
  const [savedTeam, setSavedTeam] = useState("");
  const [message, setMessage] = useState("");
  
  useEffect(() => {
  const savedTeam = localStorage.getItem("favTeam");
  if (savedTeam) {
    setTeam(savedTeam);
    setSavedTeam(savedTeam);
  }
}, []);

  function saveTeam() {
  if (team === "") {
    setMessage("Please select a team");
    return;
  }
  localStorage.setItem("favTeam", team);
  setSavedTeam(team);
  setMessage("Favourite team saved!");
}

  return (
    <main>

      {/* HERO SECTION */}
      <section className="hero">

        <h2>🏆 IPL 2026 Season</h2>

        <p>
          Experience the thrill of T20 cricket like never before.
        </p>

        <Link to="/points" className="hero-btn">
          View Points Table
        </Link>

      </section>

      {/* QUICK STATS */}
      <section className="quick-stats">

        <div className="stat-card">
          <h3>10</h3>
          <p>Teams</p>
        </div>

        <div className="stat-card">
          <h3>74</h3>
          <p>Total Matches</p>
        </div>

        <div className="stat-card">
          <h3>4</h3>
          <p>Playoff Spots</p>
        </div>

        <div className="stat-card">
          <h3>1</h3>
          <p>Champion</p>
        </div>

      </section>

      {/* TOP TEAMS */}
      <section className="home-top-teams">

        <h2>🔥 Current Top 4</h2>

        <div className="home-teams-grid">
          <div className={`home-team-card ${savedTeam === "CSK" ? "favorite-team-card" : ""}`}>1️⃣ Chennai Super Kings</div>
          <div className={`home-team-card ${savedTeam === "MI" ? "favorite-team-card" : ""}`}> 2️⃣ Mumbai Indians</div>
          <div className={`home-team-card ${savedTeam === "GT" ? "favorite-team-card" : ""}`}> 3️⃣ Gujarat Titans</div>
          <div className={`home-team-card ${savedTeam === "RCB" ? "favorite-team-card" : ""}`}> 4️⃣ Royal Challengers Bangalore</div>
        </div>  

      </section>

      {/* FAVORITE TEAM */}
      <section className="favorite-team">

        <h2>⭐ Choose Your Favourite Team</h2>

        <select value={team} onChange={(e) => setTeam(e.target.value)}>
  <option value="">Select Team</option>
  <option value="CSK">Chennai Super Kings</option>
  <option value="MI">Mumbai Indians</option>
  <option value="RCB">Royal Challengers Bangalore</option>
  <option value="SRH">Sunrisers Hyderabad</option>
  <option value="KKR">Kolkata Knight Riders</option>
  <option value="RR">Rajasthan Royals</option>
  <option value="DC">Delhi Capitals</option>
  <option value="GT">Gujarat Titans</option>
  <option value="LSG">Lucknow Super Giants</option>
  <option value="PBKS">Punjab Kings</option>
</select>

        <button onClick={saveTeam}>Save Team</button>
        {message && <p>{message}</p>}
        {savedTeam && (
          <p className="favorite-banner">Current Favourite: {savedTeam}</p>
        )}

      </section>

      {/* CTA */}
      <section className="home-cta">

        <h2>Stay Updated</h2>

        <p>
          Follow standings, match results and playoff drama all season long.
        </p>

        <Link to="/news" className="hero-btn">
          Latest News
        </Link>

      </section>

    </main>
  );
}

export default Home;