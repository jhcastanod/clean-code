import { Rectangle } from './rectangle';

export class Square extends Rectangle {
  setHeight(width: number): this {
    this.height = width;
    this.width = width;

    return this;
  }

  setWidth(width: number): this {
    this.height = width;
    this.width = width;

    return this;
  }
}