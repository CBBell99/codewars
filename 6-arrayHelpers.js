Array.prototype.square = function () {
  return this.map(function (n) {
    return n * n;
  });
};
Array.prototype.cube = function () {
  return this.map(function (n) {
    return n * n * n;
  });
};
Array.prototype.average = function () {
  return this.sum() / this.length;
};
Array.prototype.sum = function () {
  return this.reduce(function (a, b) {
    return a + b;
  }, 0);
};
Array.prototype.even = function () {
  return this.filter(function (item) {
    return 0 == item % 2;
  });
};
Array.prototype.odd = function () {
  return this.filter(function (item) {
    return 0 != item % 2;
  });
};

console.log(Array.prototype.square([2, 4]));
