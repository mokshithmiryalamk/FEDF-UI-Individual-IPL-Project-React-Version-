import { useState, useEffect } from "react";
import pointsData from "../data/pointsData";

function Points() {
  const [favTeam, setFavTeam] = useState("");

  useEffect(() => {
    const savedTeam = localStorage.getItem("favTeam");

    if (savedTeam) {
      setFavTeam(savedTeam);
    }
  }, []);

  return (
    <main>
      <section id="points">
        <h2>📊 Standings</h2>

        <table id="pointsTable">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Team</th>
              <th>Matches</th>
              <th>Won</th>
              <th>Lost</th>
              <th>NR</th>
              <th>Points</th>
              <th>NRR</th>
            </tr>
          </thead>

          <tbody>
            {pointsData.map((team, index) => (
              <tr
                key={team.rank}
                data-team={team.code}
                className={`${index < 4 ? "qualified" : ""} ${
                  team.code === favTeam ? "favorite-team-row" : ""
                }`}
              >
                <td>{team.rank}</td>
                <td>{team.team}</td>
                <td>{team.matches}</td>
                <td>{team.won}</td>
                <td>{team.lost}</td>
                <td>{team.nr}</td>
                <td>{team.points}</td>
                <td>{team.nrr}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="table-legend">
          <span className="legend-q">Q</span> Qualified for Playoffs
        </div>
      </section>
    </main>
  );
}

export default Points;