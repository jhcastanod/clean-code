import { HeroModel } from "models/hero/hero.model";

class HeroBuilder {
  private fly = false;
  private life = 100;
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  setAsFly() {
    this.fly = true;

    return this;
  }

  setLife(life: number) {
    this.life = life;

    return this;
  }

  build(): HeroModel {
    // plainToClass is from class-transformer package
    const hero = plainToClass(this, HeroModel);

    return hero;
  }
}