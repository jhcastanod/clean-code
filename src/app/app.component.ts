import { Component, OnInit } from '@angular/core';

import { IHero } from 'interfaces/hero';
import { HeroService } from 'services/hero/hero.service';
import { Roulette } from 'design-patterns/observer/roulette';
import { Red } from 'design-patterns/observer/red';
import { RouletteValueModel } from 'design-patterns/observer/roulette.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hero: IHero;
  title = 'clean-code';

  constructor(private readonly heroService: HeroService) {}

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

    this.observerPattern();
  }

  observerPattern() {
    const value: RouletteValueModel = {
      amount: 20,
      avatar: 'avatar.png',
      color: 'red',
      name: 'red ball amoutn 20'
    };
    const roulette = new Roulette();
    // const red = new Red();

    roulette.setValue(value);
  }
}
