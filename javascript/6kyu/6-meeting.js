function meeting(s) {
  return s
    .toUpperCase()
    .split(";")
    .map((name) => name.split(":").reverse())
    .sort()
    .reduce((acc, name) => (acc += `(${name[0]}, ${name[1]})`), "");
}

console.log(
  meeting(
    "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"
  )
);
