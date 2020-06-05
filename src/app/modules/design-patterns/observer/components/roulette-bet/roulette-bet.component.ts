import { Component, OnInit, Input } from '@angular/core';

import { RouletteService } from '../../services/roulette.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-roulette-bet',
  templateUrl: './roulette-bet.component.html',
  styleUrls: ['./roulette-bet.component.scss']
})
export class RouletteBetComponent implements OnInit {
  @Input() color: string;

  constructor(private readonly rouletteService: RouletteService) { }

  ngOnInit() {
    this.betsList();
  }

  betsList() {
    this.rouletteService.bets
      .pipe(filter((bet) => bet.color === this.color))
      .subscribe();
  }
}
