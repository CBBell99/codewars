function DNAStrand(dna) {
  //your code here
  const compliment = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };
  return dna
    .split("")
    .map((x) => compliment[x])
    .join("");
}

console.log(DNAStrand("AAAA"));
console.log(DNAStrand("GTAT"));
console.log(DNAStrand("CAT"));
