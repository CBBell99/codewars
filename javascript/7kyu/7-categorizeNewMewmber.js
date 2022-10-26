const openOrSenior = (data) =>
  data.map(([age, handicap]) => (age > 54 && handicap > 7 ? "Senior" : "Open"));
