import { useState, useEffect } from "react";
import TeamCard from "../components/TeamCard";
import teamsData from "../data/teamsData";

function Teams() {
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
        <h2>🏏 Participating Teams</h2>

        <div className="teams">
          {teamsData.map((team) => (
            <TeamCard
              key={team.team}
              team={team.team}
              name={team.name}
              link={team.link}
              favTeam={favTeam}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Teams;