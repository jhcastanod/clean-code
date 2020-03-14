import { Injectable } from '@angular/core';

import { HeroModel } from 'models/hero/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  create({ fly, life, name }: HeroModel): HeroModel {
    const hero = this.createBaseHero({ fly, life, name });

    return hero;
  }

  createHurtedHero({ fly, name }: HeroModel): HeroModel {
    const life = 20;
    const hero = this.createBaseHero({ fly, life, name });

    return hero;
  }

  private createBaseHero(hero: HeroModel): HeroModel {
    const defaultHeroValues = { fly: false, life: 100, name: 'Aldo Raine' };
    const mergedHero = { ...defaultHeroValues, ...hero };

    return mergedHero;
  }
}
