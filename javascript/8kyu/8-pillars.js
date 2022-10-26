function pillars(numPill, dist, width) {
  // your code here
  return numPill > 1 ? (numPill - 2) * width + (numPill - 1) * dist * 100 : 0;
}
