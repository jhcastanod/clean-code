import { ICityHero } from '../interfaces/city-hero.interface';

export class Superman implements ICityHero {
  name = 'Clark Joseph Kent';

  savePeople(): void {
    console.log(`I'm Superman, my real name name is ${this.name}, I save people during the day`);
  }
}