export class Rectangle {
  base: number;
  height: number;

  setBase(base: number): this {
    this.base = base;

    return this;
  }

  setSide(height: number): this {
    this.height = height;

    return this;
  }
}