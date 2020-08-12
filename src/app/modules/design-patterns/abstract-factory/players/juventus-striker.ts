import { AbstractBasePlayer } from '../interfaces/base-player.interface';
import { IStrikerPlayer } from '../interfaces/striker-player.interface';

export class JuventusStriker extends AbstractBasePlayer implements IStrikerPlayer {
  getName(): string {
    const name = 'Cristiano Ronaldo';

    return name;
  }

  getPhoto(): string {
    const url = 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/08/08/15969084343304.jpg';

    return url;
  }

  getTshirtNum(): number {
    const num = 7;

    return num;
  }

  makeGoal(): boolean {
    return true;
  }
}