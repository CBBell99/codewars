class Cube {
  constructor(side = 0) {
    this.side = Math.abs(side);
  }
  getSide() {
    return this.side;
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
}
