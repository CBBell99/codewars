function contamination(text, char) {
  if (!text || !char) return "";
  return text.replace(/\w|\d|\D/gi, char);
}

console.log(contamination("a@@bs"));
