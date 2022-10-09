Array.prototype.square = function () {
  return this.map(function (n) {
    return n * n;
  });
};
