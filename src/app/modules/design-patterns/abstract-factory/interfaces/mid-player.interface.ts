import { AbstractBasePlayer } from './base-player.interface';

export interface IMidPlayer extends AbstractBasePlayer {
  passBallToStrikers(): boolean;
}