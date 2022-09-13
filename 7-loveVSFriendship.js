function wordsToMarks(string) {
  //your code here
  return string
    .split("")
    .reduce((prev, curr) => prev + curr.charCodeAt() - 96, 0);
}
