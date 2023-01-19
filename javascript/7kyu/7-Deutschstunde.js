function derDieDas(wort) {
  let lowerCase = wort.toLowerCase();
  let vowels = "aieouäöü";
  let count = 0;
  for (let i = 0; i < lowerCase.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (lowerCase[i] === vowels[j]) {
        count++;
      }
    }
  }
  return count > 3 ? `der ${wort}` : count > 1 ? `die ${wort}` : `das ${wort}`;
}
