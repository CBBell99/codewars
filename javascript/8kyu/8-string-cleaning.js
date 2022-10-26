function stringClean(s) {
  let regex = /[\d]/g;
  return s.replace(regex, "");
}
