import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IHero } from 'interfaces/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  readonly endpoint = 'http://www.mocky.io/v2/5e84fa50300000460a97ad84';

  constructor(private readonly http: HttpClient) {}

  create(hero: IHero): Observable<IHero> {
    return this.http.post<IHero>(this.endpoint, hero);
  }
}
