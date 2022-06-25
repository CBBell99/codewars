function cockroachSpeed(s) {
  let kmPerSecond = s / 60 / 60;
  return Math.round(kmPerSecond * 100000);
}

console.log(cockroachSpeed(1.08));
