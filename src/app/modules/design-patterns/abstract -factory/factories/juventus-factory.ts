import { IBuildPlayer } from '../interfaces/build-player.interface';
import { GoalKeeper } from '../players/goalkeeper';
import { MidPlayer } from '../players/mid-player';
import { Striker } from '../players/striker';

export class JuventusPlayerBuildFactory implements IBuildPlayer {
  buildGoalKeeper(): GoalKeeper {
    const player = new GoalKeeper('Buffon', 12, '');

    return player;
  }

  buildMidPlayer(): MidPlayer {
    const player = new MidPlayer('Lucas', 7, '');

    return player;
  }

  buildStrikerPlayer(): Striker {
    const player = new Striker('Ronaldo', 7, '...');

    return player;
  }
}