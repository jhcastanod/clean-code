import { AbstractBasePlayer } from './base-player.interface';

export interface IGoalKeeperPlayer extends AbstractBasePlayer {
  defendPenalty(): boolean;
}