import { IBuildPlayerFactory } from '../interfaces/build-player.interface';
import { IGoalKeeperPlayer } from '../interfaces/goalkeeper-player.interface';
import { IMidPlayer } from '../interfaces/mid-player.interface';
import { IStrikerPlayer } from '../interfaces/striker-player.interface';
import { BarcelonaGoalKeeper } from '../players/barcelona-goalkeeper';
import { BarcelonaMidField } from '../players/barcelona-midfield';
import { BarcelonaStriker } from '../players/barcelona-striker';

export class BarcelonaPlayerBuildFactory implements IBuildPlayerFactory {
  buildGoalKeeper(): IGoalKeeperPlayer {
    const goalKeeper =  new BarcelonaGoalKeeper();

    return goalKeeper;
  }

  buildMidPlayer(): IMidPlayer {
    const midField = new BarcelonaMidField();

    return midField;
  }

  buildStrikerPlayer(): IStrikerPlayer {
    const striker = new BarcelonaStriker();

    return striker;
  }
}