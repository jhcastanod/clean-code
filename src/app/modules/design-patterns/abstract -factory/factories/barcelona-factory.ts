import { IBuildPlayer } from '../interfaces/build-player.interface';
import { GoalKeeper } from '../players/goalkeeper';
import { MidPlayer } from '../players/mid-player';
import { Striker } from '../players/striker';

export class BarcelonaPlayerBuildFactory implements IBuildPlayer {
  buildGoalKeeper(): GoalKeeper {
    const player = new GoalKeeper('Ter', 1, '');

    return player;
  }

  buildMidPlayer(): MidPlayer {
    const player = new MidPlayer('Jorge', 7, '');

    return player;
  }

  buildStrikerPlayer(): Striker {
    const player = new Striker('Messi', 10, '...');

    return player;
  }
}