function bump(road) {
  return road.split("n").length - 1 <= 15 ? "Woohoo!" : "Car Dead";
}
