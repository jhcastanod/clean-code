import { IBuildPlayerFactory } from '../interfaces/build-player.interface';
import { IGoalKeeperPlayer } from '../interfaces/goalkeeper-player.interface';
import { IMidPlayer } from '../interfaces/mid-player.interface';
import { IStrikerPlayer } from '../interfaces/striker-player.interface';
import { JuventusGoalKeeper } from '../players/juventus-goalkeeper';
import { JuventusMidField } from '../players/juventus-midfield';
import { JuventusStriker } from '../players/juventus-striker';

export class JuventusPlayerBuildFactory implements IBuildPlayerFactory {
  buildGoalKeeper(): IGoalKeeperPlayer {
    const goalKeeper = new JuventusGoalKeeper();

    return goalKeeper;
  }

  buildMidPlayer(): IMidPlayer {
    const midFieldPlayer = new JuventusMidField();

    return midFieldPlayer;
  }

  buildStrikerPlayer(): IStrikerPlayer {
    const striker = new JuventusStriker();

    return striker;
  }
}