import { Injectable } from '@angular/core';

import { HeroModel } from 'models/hero/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  create(hero: HeroModel, isHurt: boolean): HeroModel {
    const defaultValues = { fly: false, life: 100, name: 'Aldo Raine' };

    if (isHurt) {
      hero.life -= 20;
    }

    const newHero = { ...defaultValues, ...hero };

    return newHero;
  }
}
