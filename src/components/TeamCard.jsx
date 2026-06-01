function TeamCard({ team, name, link, favTeam }) {
  return (
    <article
      className={`team ${team === favTeam ? "favorite-team-card" : ""}`}
      data-team={team}
    >
      <a href={link} target="_blank">
        {name}
      </a>
    </article>
  );
}

export default TeamCard;