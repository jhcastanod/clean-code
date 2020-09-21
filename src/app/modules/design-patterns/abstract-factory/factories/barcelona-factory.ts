import { IPlayerFactory } from '../interfaces/create-player.interface';
import { IGoalKeeperPlayer } from '../interfaces/goalkeeper-player.interface';
import { IMidPlayer } from '../interfaces/mid-player.interface';
import { IStrikerPlayer } from '../interfaces/striker-player.interface';
import { BarcelonaGoalKeeper } from '../players/barcelona-goalkeeper';
import { BarcelonaMidField } from '../players/barcelona-midfield';
import { BarcelonaStriker } from '../players/barcelona-striker';

export class BarcelonaPlayerFactory implements IPlayerFactory {
  createGoalKeeper(): IGoalKeeperPlayer {
    const goalKeeper =  new BarcelonaGoalKeeper();

    return goalKeeper;
  }

  createMidPlayer(): IMidPlayer {
    const midField = new BarcelonaMidField();

    return midField;
  }

  createStrikerPlayer(): IStrikerPlayer {
    const striker = new BarcelonaStriker();

    return striker;
  }
}