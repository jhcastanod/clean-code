import { AbstractBasePlayer } from '../players/base-player.interface';

export interface IMidFieldPlayer extends AbstractBasePlayer {
  passBallToStrikers(): boolean;
}