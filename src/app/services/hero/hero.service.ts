import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { plainToClass } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IHero } from 'interfaces/hero';
import { HeroModel } from 'models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  readonly endpoint = 'http://www.mocky.io/v2/5e86445c3100000929813940';

  constructor(private readonly http: HttpClient) { }

  create(hero: IHero): Observable<IHero> {
    return this.http.post<IHero>(this.endpoint, hero)
      .pipe(map(heroData => plainToClass(HeroModel, heroData)));
  }
}
