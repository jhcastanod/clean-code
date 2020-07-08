import { ICityHero } from '../interfaces/city-hero.interface';

export class Batman implements ICityHero {
  name = 'Bruce Wayne';

  savePeople(): void {
    console.log(`I'm Batman, my real name is ${this.name}, I save people during the night`);
  }
}