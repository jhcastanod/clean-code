import { AbstractBasePlayer } from '../players/base-player.interface';

export interface IGoalKeeperPlayer extends AbstractBasePlayer {
  defendPenalty(): boolean;
}