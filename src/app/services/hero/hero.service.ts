import { Injectable } from '@angular/core';

import { HeroModel } from 'models/hero/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  create(fly: boolean, life: number): HeroModel {
    const heroBase = this.createBaseHero({ fly, life });
    const newHero = heroBase;

    return newHero;
  }

  createHurtedHero(fly: boolean, life: number): HeroModel {
    const heroBase = this.createBaseHero({ fly, life });
    heroBase.life = 20;
    const demageHero = heroBase;

    return demageHero;
  }

  private createBaseHero(hero: HeroModel): HeroModel {
    const defaultHeroValues = { fly: false, life: 100, name: 'Aldo Raine' };
    const mergeDefaultAndParamValues = { ...defaultHeroValues, ...hero };

    return mergeDefaultAndParamValues;
  }
}
