function betterThanAverage(classPoints, yourPoints) {
  let sum = classPoints.reduce((prev, curr) => prev + curr, 0)
  let avg = sum / classPoints.length
  return yourPoints > avg ? true : false;
}

