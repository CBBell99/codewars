const highestRank = (arr) =>
  [
    ...arr
      .reduce((acc, cur) => {
        acc.set(cur, (acc.get(cur) || 0) + 1);
        return acc;
      }, new Map())
      .entries(),
  ].sort((a, b) => {
    if (a[1] !== b[1]) {
      return b[1] - a[1];
    }

    return b[0] - a[0];
  })[0][0];
