import { Component, OnInit } from '@angular/core';

import { IHero } from 'interfaces/hero';
import { MathService } from 'modules/design-patterns/decorator/services/math.service';
import { HeroService } from 'services/hero/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hero: IHero;
  title = 'clean-code';
  number: number;

  constructor(
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
  }

  generateFibonacciNum() {
    const result = this.math.fibonacci(this.number);
  }
}
