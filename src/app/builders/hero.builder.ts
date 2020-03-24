import { classToPlain, plainToClass } from 'class-transformer';

import { HeroModel } from 'models/hero.model';

export class HeroBuilder {
  private fly = false;
  private life = 100;
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  setAsFly(): boolean {
    this.fly = true;

    return this.fly;
  }

  setLife(life: number): number {
    this.life = life;

    return this.life;
  }

  build(): HeroModel {
    const heroProps = classToPlain(this);
    const hero = plainToClass(HeroModel, heroProps);

    return hero;
  }
}
