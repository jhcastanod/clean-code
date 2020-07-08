import { Component, Inject, OnInit } from '@angular/core';

import { IHero } from 'interfaces/hero';
import { MathService } from 'modules/design-patterns/decorator/services/math.service';
import { ICityHero } from 'modules/design-patterns/factory/interfaces/city-hero.interface';
import { HeroService } from 'services/hero/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hero: IHero;
  num: number;
  title = 'clean-code';

  constructor(
    @Inject('CITY_HERO')
    private readonly cityHero: ICityHero,
    private readonly heroService: HeroService,
    private readonly math: MathService) {}

  ngOnInit() {
    this.heroService.create({ fly: true, name: 'Batman' }).subscribe({
      complete: () => {
        console.log('complete');
      },
      next: (hero: IHero) => {
        this.hero = hero;
        console.log(this.hero);
      }
    });

    this.cityHero.savePeople();
  }

  generateFibonacciNum() {
    this.math.fibonacci(this.num);
  }
}
