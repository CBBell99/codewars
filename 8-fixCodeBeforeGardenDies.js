function rainAmount(mm) {
  return mm < 40
    ? `You need to give your plant ${40 - mm}mm of water`
    : "Your plant has had more than enough water for today!";
}
