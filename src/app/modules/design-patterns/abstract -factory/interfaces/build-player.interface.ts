import { GoalKeeper } from '../players/goalkeeper';
import { MidPlayer } from '../players/mid-player';
import { Striker } from '../players/striker';

export interface IBuildPlayer {
  buildGoalKeeper(): GoalKeeper;
  buildMidPlayer(): MidPlayer;
  buildStrikerPlayer(): Striker;
}