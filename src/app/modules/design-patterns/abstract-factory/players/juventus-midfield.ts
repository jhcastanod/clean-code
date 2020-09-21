import { IMidFieldPlayer } from '../interfaces/midfield.interface';
import { AbstractBasePlayer } from './base-player.interface';

export class JuventusMidField extends AbstractBasePlayer implements IMidFieldPlayer {
  getName(): string {
    const name = 'Dybala';

    return name;
  }

  getPhoto(): string {
    const url = 'https://assets-es.imgfoot.com/media/cache/642x382/paulo-dybala-1920-2.jpg';

    return url;
  }

  getTshirtNum(): number {
    const num = 10;

    return num;
  }

  passBallToStrikers(): boolean {
    return true;
  }
}