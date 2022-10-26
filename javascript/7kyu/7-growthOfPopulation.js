const nbYear = (p0, percent, aug, p) =>
  p0 < p
    ? true + nbYear((p0 + (p0 * percent) / 100 + aug) | 0, percent, aug, p)
    : 0;
