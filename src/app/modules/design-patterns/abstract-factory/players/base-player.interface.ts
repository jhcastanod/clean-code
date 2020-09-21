export abstract class AbstractBasePlayer {
  private name: string;
  private photo: string;
  private tShirt: number;

  getName(): string {
    return this.name;
  }

  getPhoto(): string {
    return this.photo;
  }

  getTshirtNum(): number {
    return this.tShirt;
  }

  toJSON(): { name: string, photo: string, tShirt: number } {
    const playerInfo = { name: this.getName(), photo: this.getPhoto(), tShirt: this.getTshirtNum() };

    return playerInfo;
  }
}