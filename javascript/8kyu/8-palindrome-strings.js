function isPalindrome(line) {
  return "" + line === ("" + line).split("").reverse().join("");
}
