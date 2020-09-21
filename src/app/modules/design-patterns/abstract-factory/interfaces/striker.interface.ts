import { AbstractBasePlayer } from '../players/base-player.interface';

export interface IStrikerPlayer extends AbstractBasePlayer {
  makeGoal(): boolean;
}