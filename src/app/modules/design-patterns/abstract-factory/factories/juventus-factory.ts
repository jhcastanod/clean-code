import { IPlayerFactory } from '../interfaces/create-player.interface';
import { IGoalKeeperPlayer } from '../interfaces/goalkeeper.interface';
import { IMidFieldPlayer } from '../interfaces/mid-field.interface';
import { IStrikerPlayer } from '../interfaces/striker.interface';
import { JuventusGoalKeeper } from '../players/juventus-goalkeeper';
import { JuventusMidField } from '../players/juventus-midfield';
import { JuventusStriker } from '../players/juventus-striker';

export class JuventusPlayerFactory implements IPlayerFactory {
  createGoalKeeper(): IGoalKeeperPlayer {
    const goalKeeper = new JuventusGoalKeeper();

    return goalKeeper;
  }

  createMidPlayer(): IMidFieldPlayer {
    const midFieldPlayer = new JuventusMidField();

    return midFieldPlayer;
  }

  createStrikerPlayer(): IStrikerPlayer {
    const striker = new JuventusStriker();

    return striker;
  }
}