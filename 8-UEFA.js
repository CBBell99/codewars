function uefaEuro2016(teams, scores) {
  var teamA = teams[0];
  var teamB = teams[1];

  if (scores[0] > scores[1]) {
    return "At match " + teamA + " - " + teamB + ", " + teamA + " won!";
  } else if (scores[0] < scores[1]) {
    return "At match " + teamA + " - " + teamB + ", " + teamB + " won!";
  } else if (scores[0] === scores[1]) {
    return "At match " + teamA + " - " + teamB + ", teams played draw.";
  }
}
