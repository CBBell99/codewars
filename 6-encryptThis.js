const encryptThis = (text) => {
  return text
    .split(" ")
    .map((e) => {
      if (e.length === 1) return e.charCodeAt(0);
      if (e.length === 2) return `${e[0].charCodeAt(0)}${e[1]}`;
      if (e.length === 3) return `${e[0].charCodeAt(0)}${e.slice(-1)}${e[1]}`;
      if (e.length > 3)
        return `${e[0].charCodeAt(0)}${e.slice(-1)}${e.slice(2, -1)}${e[1]}`;
    })
    .join(" ");
};
