import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IHero } from '../../interfaces/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  readonly defaultHeroValues: IHero = { fly: false, life: 100, name: 'Aldo Raine' };
  readonly endpoint = 'http://www.mocky.io/v2/5e6fb5cd33000051c3f07bb6';

  constructor(private readonly http: HttpClient) {}

  create({ fly, life, name }: IHero): IHero {
    const hero = this.createBaseHero({ fly, life, name });

    return hero;
  }

  private createBaseHero(hero: IHero): IHero {
    const mergedHero = { ...this.defaultHeroValues, ...hero };

    return mergedHero;
  }
}
