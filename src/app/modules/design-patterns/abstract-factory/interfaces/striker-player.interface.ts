import { AbstractBasePlayer } from './base-player.interface';

export interface IStrikerPlayer extends AbstractBasePlayer {
  makeGoal(): boolean;
}