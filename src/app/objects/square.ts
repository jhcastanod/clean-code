export class Square {
  height: number;
  width: number;

  setHeight(height: number): this {
    this.height = height;

    return this;
  }

  setWidth(width: number): this {
    this.width = width;

    return this;
  }
}