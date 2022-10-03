function uefaEuro2016(teams, scores) {
  const [team1, team2] = teams;
  const [score1, score2] = scores;
  const winner = score1 > score2 ? team1 : team2;

  return score1 === score2
    ? `At match ${team1} - ${team2}, teams played draw.`
    : `At match ${team1} - ${team2}, ${winner} won!`;
}
