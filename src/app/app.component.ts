import { Component, OnInit } from '@angular/core';

import { HeroService } from 'services/hero/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hero: any;
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
      next: (hero) => {
        this.hero = hero;
        console.log('next');
      }
    });
  }
}
