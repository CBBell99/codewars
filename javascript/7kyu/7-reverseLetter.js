function reverseLetter(str) {
  return str
    .split("")
    .reverse()
    .join("")
    .replace(/[^A-Za-z]/g, "");
}
