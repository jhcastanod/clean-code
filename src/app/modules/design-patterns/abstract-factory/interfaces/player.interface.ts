import { IGoalKeeperPlayer } from './goalkeeper.interface';
import { IMidFieldPlayer } from './mid-field.interface';
import { IStrikerPlayer } from './striker.interface';

export interface IPlayerFactory {
  createGoalKeeper(): IGoalKeeperPlayer;
  createMidField(): IMidFieldPlayer;
  createStriker(): IStrikerPlayer;
}