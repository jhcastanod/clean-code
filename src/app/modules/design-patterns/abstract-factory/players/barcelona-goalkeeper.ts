import { AbstractBasePlayer } from '../interfaces/base-player.interface';
import { IGoalKeeperPlayer } from '../interfaces/goalkeeper-player.interface';

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