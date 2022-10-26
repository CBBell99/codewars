function remove(s) {
  return s[s.length - 1] == "!" ? s.slice(0, s.length - 1) : s;
}
