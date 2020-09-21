import { IGoalKeeperPlayer } from '../interfaces/goalkeeper.interface';
import { AbstractBasePlayer } from './base-player.interface';

export class BarcelonaGoalKeeper extends AbstractBasePlayer implements IGoalKeeperPlayer {
  defendPenalty(): boolean {
    return false;
  }

  getName(): string {
    const name = 'Ter';

    return name;
  }

  getPhoto(): string {
    const url = 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/03/16/15843725660023.jpg';

    return url;
  }

  getTshirtNum(): number {
    const num = 1;

    return num;
  }
}