import { IPlayerFactory } from '../interfaces/create-player.interface';
import { BarcelonaPlayerFactory } from './barcelona-factory';
import { JuventusPlayerFactory } from './juventus-factory';

export const teamBuilderFactory = (teamName: 'barcelona' | 'juventus'): IPlayerFactory => {
  const isBarcelonaTeam = teamName === 'barcelona';

  return isBarcelonaTeam ? new BarcelonaPlayerFactory() : new JuventusPlayerFactory();
}