class HeroBuilder {
  private fly = false;
  private life = 100;
  private name: string;

  constructor(name: string) {
    this.name = name ;
  }

  setIsFly(fly: boolean) {
    this.fly = fly;

    return this;
  }

  setLife(life: number) {
    this.life = life;

    return this;
  }

  build() {
    // plainToClass is from class-transformer package
    const hero = plainToClass(this, HeroModel);

    return hero;
  }
}