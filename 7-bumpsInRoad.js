function bump(road) {
  let count = 0;

  for (let i = 0; i < road.length; i++) {
    if (road[i] === "n") {
      count++;
    }
  }
  return count <= 15 ? "Woohoo!" : "Car Dead";
}
