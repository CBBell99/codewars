function checkExam(arr1, arr2) {
  let score = 0;

  for (let i = 0; i < arr1.length; i++) {
    score += arr2[i] !== "" ? (arr1[i] === arr2[i] ? 4 : -1) : 0;
  }
  return score < 0 ? 0 : score;
}
