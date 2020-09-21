import { IStrikerPlayer } from '../interfaces/striker.interface';
import { AbstractBasePlayer } from './base-player.interface';

export class BarcelonaStriker extends AbstractBasePlayer implements IStrikerPlayer {
  getName(): string {
    const name = 'Suarez';

    return name;
  }

  getPhoto(): string {
    const url = 'https://tmssl.akamaized.net/images/foto/normal/suarez-barcelona-1590676945-39889.jpg';

    return url;
  }

  getTshirtNum(): number {
    const num = 9;

    return num;
  }

  makeGoal(): boolean {
    return true;
  }
}