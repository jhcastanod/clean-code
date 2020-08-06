import { IPlayer } from '../interfaces/player.interface';

export class MidPlayer implements IPlayer {
  playerName: string;
  playerPhoto: string;
  playerTshirtNum: number;

  constructor(name: string, tshirtNum: number, photo: string) {
    this.playerName = name;
    this.playerPhoto = photo;
    this.playerTshirtNum = tshirtNum;
  }

  name(): string {
    return this.playerName;
  }

  photo(): string {
    return this.playerPhoto;
  }

  tShirtNum(): number {
    return this.playerTshirtNum;
  }
}