import { IGoalKeeperPlayer } from '../interfaces/goalkeeper.interface';
import { IMidFieldPlayer } from '../interfaces/mid-field.interface';
import { IPlayerFactory } from '../interfaces/player.interface';
import { IStrikerPlayer } from '../interfaces/striker.interface';
import { JuventusGoalKeeper } from '../players/juventus-goalkeeper';
import { JuventusMidField } from '../players/juventus-midfield';
import { JuventusStriker } from '../players/juventus-striker';

export class JuventusPlayerFactory implements IPlayerFactory {
  createGoalKeeper(): IGoalKeeperPlayer {
    const goalKeeper = new JuventusGoalKeeper();

    return goalKeeper;
  }

  createMidField(): IMidFieldPlayer {
    const midFieldPlayer = new JuventusMidField();

    return midFieldPlayer;
  }

  createStriker(): IStrikerPlayer {
    const striker = new JuventusStriker();

    return striker;
  }
}