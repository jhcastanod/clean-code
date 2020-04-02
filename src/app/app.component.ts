import { Component, OnInit } from '@angular/core';

import { IHero } from 'interfaces/hero';
import { HeroService } from 'services/hero/hero.service';

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
      error: (error) => {
        console.log('heroService.error', error);
      },
      next: (serverHero: IHero) => {
        this.hero = serverHero;
        console.log('next');
      }
    });
  }
}
