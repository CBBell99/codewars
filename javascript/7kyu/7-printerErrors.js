function printerError(s) {
  const dic = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
  const splitString = s.split("");
  let error = 0;
  splitString.map((x) =>
    dic.includes(x) === false ? (error += 1) : (error += 0)
  );

  return `${error}/${s.length}`;
}
