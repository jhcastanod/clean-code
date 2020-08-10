import { IPlayer } from '../interfaces/player.interface';

export class MidPlayer implements IPlayer {
  constructor(
    private readonly name: string,
    private readonly tShirtNum: number,
    private readonly photo: string
    ) {}

  getName(): string {
    return this.name;
  }

  getPhoto(): string {
    return this.photo;
  }

  getTshirtNum(): number {
    return this.tShirtNum;
  }
}