import { useState, useEffect } from "react";
import MatchCard from "../components/MatchCard";

function Playoffs() {
  const [favTeam, setFavTeam] = useState("");

  useEffect(() => {
    const savedTeam = localStorage.getItem("favTeam");

    if (savedTeam) {
      setFavTeam(savedTeam);
    }
  }, []);

  return (
    <main>
      <section>
        <h2>🏆 Playoff Matches</h2>

        <div className="matches">
          <MatchCard
            matchNumber="Qualifier 1"
            team1="CSK 179/4"
            team2="MI 175/8"
            result="CSK won by 4 runs"
            favTeam={favTeam}
          />

          <MatchCard
            matchNumber="Eliminator"
            team1="GT 185/7"
            team2="RCB 170/9"
            result="GT won by 15 runs"
            favTeam={favTeam}
          />

          <MatchCard
            matchNumber="Qualifier 2"
            team1="GT 160/5"
            team2="MI 158/8"
            result="GT won by 5 wickets"
            favTeam={favTeam}
          />

          <MatchCard
            matchNumber="Final"
            team1="CSK 172/8"
            team2="GT 166/9"
            result="CSK won by 6 runs"
            favTeam={favTeam}
          />
        </div>

        <div className="champions">
          🏆 Champions: Chennai Super Kings
        </div>
      </section>
    </main>
  );
}

export default Playoffs;