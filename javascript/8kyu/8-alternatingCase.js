String.prototype.toAlternatingCase = function (string) {
  return this.split("")
    .map((dt) =>
      dt.toLowerCase() === dt ? dt.toUpperCase() : dt.toLowerCase()
    )
    .join("");
};
