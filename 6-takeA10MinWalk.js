function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  let north = 0;
  let south = 0;
  let east = 0;
  let west = 0;

  for (i = 0; i < walk.length; i++) {
    if (walk[i] == "n") north++;
    else if (walk[i] == "s") south++;
    else if (walk[i] == "e") east++;
    else if (walk[i] == "w") west++;
  }

  if (north == south && west == east) return true;
  return false;
}
