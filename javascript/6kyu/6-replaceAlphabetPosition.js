const alphabet = "abcdefghijklmnopqrstuvwxyz";

function alphabetPosition(text) {
  return text
    .split("")
    .filter((v) => /[a-zA-Z]/.test(v))
    .map((v) => v.toLowerCase().charCodeAt(0) - 96)
    .join(" ");
}
