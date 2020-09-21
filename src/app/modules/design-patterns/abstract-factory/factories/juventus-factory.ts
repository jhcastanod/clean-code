import { IPlayerFactory } from '../interfaces/create-player.interface';
import { IGoalKeeperPlayer } from '../interfaces/goalkeeper-player.interface';
import { IMidPlayer } from '../interfaces/mid-player.interface';
import { IStrikerPlayer } from '../interfaces/striker-player.interface';
import { JuventusGoalKeeper } from '../players/juventus-goalkeeper';
import { JuventusMidField } from '../players/juventus-midfield';
import { JuventusStriker } from '../players/juventus-striker';

export class JuventusPlayerFactory implements IPlayerFactory {
  createGoalKeeper(): IGoalKeeperPlayer {
    const goalKeeper = new JuventusGoalKeeper();

    return goalKeeper;
  }

  createMidPlayer(): IMidPlayer {
    const midFieldPlayer = new JuventusMidField();

    return midFieldPlayer;
  }

  createStrikerPlayer(): IStrikerPlayer {
    const striker = new JuventusStriker();

    return striker;
  }
}