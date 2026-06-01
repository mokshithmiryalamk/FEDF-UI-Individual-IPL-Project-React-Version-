function MatchCard({
  matchNumber,
  team1,
  team2,
  result,
  favTeam
}) {
  const matchText = `${team1} ${team2} ${result}`;

  let matchStatus = "";

  if (favTeam && matchText.includes(favTeam)) {
  if (result.includes("No Result")) {
    matchStatus = "favorite-nr";
  }
  else if (result.startsWith(favTeam + " won")) {
    matchStatus = "favorite-win";
  }
  else {
    matchStatus = "favorite-loss";
  }

}

  return (
    <div className={`match-card ${matchStatus}`}>
      <div className="match-number">
        {matchNumber}
      </div>

      <div className="match-score-row">
        <div className="team-score">
          {team1}
        </div>

        <div className="team-score">
          {team2}
        </div>
      </div>

      <div className="match-result">
        {result}
      </div>
    </div>
  );
}

export default MatchCard;