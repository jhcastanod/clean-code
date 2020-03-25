import { classToPlain, plainToClass } from 'class-transformer';

import { HeroModel } from 'models/hero.model';

export class HeroBuilder {
  private fly = false;
  private life = 100;
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  setAsFly(): this {
    this.fly = true;

    return this;
  }

  setLife(life: number): this {
    this.life = life;

    return this;
  }

  build(): HeroModel {
    const heroProps = classToPlain(this);
    const hero = plainToClass(HeroModel, heroProps);

    return hero;
  }
}
