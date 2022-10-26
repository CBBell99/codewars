function longest(words) {
  return Math.max(...words.map(word => word.length))
}

console.log(longest(['simple', 'is', 'better', 'than', 'complex'])) // 7