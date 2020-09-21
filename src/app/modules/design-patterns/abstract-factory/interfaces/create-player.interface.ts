import { IGoalKeeperPlayer } from './goalkeeper.interface';
import { IMidFieldPlayer } from './midfield.interface';
import { IStrikerPlayer } from './striker.interface';

export interface IPlayerFactory {
  createGoalKeeper(): IGoalKeeperPlayer;
  createMidPlayer(): IMidFieldPlayer;
  createStrikerPlayer(): IStrikerPlayer;
}