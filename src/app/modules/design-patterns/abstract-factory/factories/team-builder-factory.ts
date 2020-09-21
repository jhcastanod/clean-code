import { BarcelonaPlayerBuildFactory } from './barcelona-factory';
import { JuventusPlayerBuildFactory } from './juventus-factory';

export function teamBuilderFactory(teamName: 'barcelona' | 'juventus') {
  const isBarcelonaTeam = teamName === 'barcelona';

  return isBarcelonaTeam ? new BarcelonaPlayerBuildFactory() : new JuventusPlayerBuildFactory();
}