import { Rectangle } from './rectangle';

export class Square extends Rectangle {
  setHeight(height: number) {
    this.setSide(height);
  }

  setWidth(width: number) {
    this.setBase(width);
  }
}