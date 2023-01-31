class Cube {
  constructor(num: number = 0) {
    this.setSide(num);
  }

  public getSide(): number {
    return this._side;
  }

  public setSide(value: number) {
    this._side = Math.abs(value);
  }

  private _side: number;
}
