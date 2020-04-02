import { Component, OnInit } from '@angular/core';

import { HeroService } from 'services/hero/hero.service';
import { NotificationService } from 'services/notification/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'clean-code';

  constructor(private readonly heroService: HeroService) { }

  ngOnInit() {
    this.heroService.create({ fly: true, name: 'Batman' }).subscribe({
      complete: () => {
        console.log('complete');
      },
      error: (error) => {
        console.log('heroService.error', error);
      },
      next: () => {
        console.log('next');
      }
    });
  }
}
