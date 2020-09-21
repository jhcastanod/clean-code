import { IPlayerFactory } from '../interfaces/player.interface';
import { BarcelonaPlayerFactory } from './barcelona-player.factory';
import { JuventusPlayerFactory } from './juventus-player.factory';

export const teamBuilderFactory = (teamName: 'barcelona' | 'juventus'): IPlayerFactory => {
  const isBarcelonaTeam = teamName === 'barcelona';
  const factory = isBarcelonaTeam ? new BarcelonaPlayerFactory() : new JuventusPlayerFactory();

  return factory;
}