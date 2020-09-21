import { IGoalKeeperPlayer } from '../interfaces/goalkeeper.interface';
import { IMidFieldPlayer } from '../interfaces/mid-field.interface';
import { IPlayerFactory } from '../interfaces/player.interface';
import { IStrikerPlayer } from '../interfaces/striker.interface';
import { BarcelonaGoalKeeper } from '../players/barcelona-goalkeeper';
import { BarcelonaMidField } from '../players/barcelona-midfield';
import { BarcelonaStriker } from '../players/barcelona-striker';

export class BarcelonaPlayerFactory implements IPlayerFactory {
  createGoalKeeper(): IGoalKeeperPlayer {
    const goalKeeper =  new BarcelonaGoalKeeper();

    return goalKeeper;
  }

  createMidField(): IMidFieldPlayer {
    const midField = new BarcelonaMidField();

    return midField;
  }

  createStriker(): IStrikerPlayer {
    const striker = new BarcelonaStriker();

    return striker;
  }
}