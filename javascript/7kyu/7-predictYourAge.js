function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  let ages = [age1, age2, age3, age4, age5, age6, age7, age8];
  let output = ages
    .map((element) => element * element)
    .reduce((sum, current) => sum + current, 0);
  return Math.floor(Math.sqrt(output) / 2);
}
