import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IHero } from 'interfaces/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  readonly endpoint = 'http://www.mocky.io/v2/5e7657ac2f0000710098603e';

  constructor(private readonly http: HttpClient) { }

  create(hero: IHero) {
    return this.http.post(this.endpoint, hero);
  }
}
