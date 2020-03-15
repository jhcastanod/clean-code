import { Injectable } from '@angular/core';

import { HeroModel } from '../../models/hero/hero.model';
import { IHero } from '../../interfaces/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  readonly defaultHeroValues: IHero = { fly: false, life: 100, name: 'Aldo Raine' };

  create({ fly, life, name }: IHero): IHero {
    const hero = this.createBaseHero({ fly, life, name });

    return hero;
  }

  createHurtedHero({ fly, name }: IHero): Pick<IHero, 'fly' | 'name'> {
    const life = 20;
    const hero = this.createBaseHero({ fly, life, name });

    return hero;
  }

  private createBaseHero(hero: IHero): IHero {
    const mergedHero = { ...this.defaultHeroValues, ...hero };

    return mergedHero;
  }
}
