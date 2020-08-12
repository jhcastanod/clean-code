import { AbstractBasePlayer } from '../interfaces/base-player.interface';
import { IMidPlayer } from '../interfaces/mid-player.interface';

export class BarcelonaMidField extends AbstractBasePlayer implements IMidPlayer {
  getName(): string {
    const name = 'Messi';

    return name;
  }

  getPhoto(): string {
    const url = 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/08/10/15970667260979.jpg';

    return url;
  }

  getTshirtNum(): number {
    const num = 10;

    return num;
  }

  passBallToStrikers(): boolean {
    return false;
  }
}