import { IGoalKeeperPlayer } from '../interfaces/goalkeeper-player.interface';
import { AbstractBasePlayer } from '../interfaces/base-player.interface';

export class JuventusGoalKeeper extends AbstractBasePlayer implements IGoalKeeperPlayer {
  defendPenalty(): boolean {
    return true;
  }

  getName(): string {
    const name = 'Gigi';

    return name;
  }

  getPhoto(): string {
    const url = 'https://cflvdg.avoz.es/default/2020/07/04/00121593891422279787849/Foto/reu_20200410_072007606.jpg';

    return url;
  }

  getTshirtNum(): number {
    const num = 1;

    return num;
  }
}