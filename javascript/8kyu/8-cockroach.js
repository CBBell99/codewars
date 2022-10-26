function cockroachSpeed(s) {
  let kmPerSecond = s / 60 / 60;
  return Math.floor(kmPerSecond * 100000);
}

console.log(cockroachSpeed(1.08));
