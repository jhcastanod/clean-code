import { Injectable } from '@angular/core';

import { HeroModel } from 'models/animal/hero/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  create(hero: HeroModel, isHurt: boolean) {
    const defaultValues = { fly: false, life: 100, name: 'Aldo Raine' };

    if (isHurt) {
      hero.life -= 20;
    }

    const newHero = { ...defaultValues, ...hero };

    return newHero;
  }
}
