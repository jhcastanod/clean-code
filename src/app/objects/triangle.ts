export class Triangle {
  base: number;
  height: number;

  setBase(base: number): this {
    this.base = base;

    return this;
  }

  setHeight(height: number): this {
    this.height = height;

    return this;
  }
}