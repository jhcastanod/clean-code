export abstract class AbstractBasePlayer {
  name: string;
  photo: string;
  tShirt: number;

  getName(): string {
    return this.name;
  }

  getPhoto(): string {
    return this.photo;
  }

  getTshirtNum(): number {
    return this.tShirt;
  }
}