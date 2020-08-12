import { IGoalKeeperPlayer } from './goalkeeper-player.interface';
import { IMidPlayer } from './mid-player.interface';
import { IStrikerPlayer } from './striker-player.interface';

export interface IBuildPlayerFactory {
  buildGoalKeeper(): IGoalKeeperPlayer;
  buildMidPlayer(): IMidPlayer;
  buildStrikerPlayer(): IStrikerPlayer;
}