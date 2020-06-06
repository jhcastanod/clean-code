import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';

import { RoulettetBetModel } from '../../models/roulette-bet.model';
import { RouletteService } from '../../services/roulette.service';


@Component({
  selector: 'app-roulette-bet',
  templateUrl: './roulette-bet.component.html',
  styleUrls: ['./roulette-bet.component.scss']
})
export class RouletteBetComponent implements OnInit, OnDestroy {
  betListArr: RoulettetBetModel[];

  @Input()
  color: string;

  // TODO: Add type
  rouletteSubscription$;

  constructor(private readonly rouletteService: RouletteService) {}

  ngOnInit() {
    this.betsList();
  }

  ngOnDestroy() {
    this.rouletteSubscription$.unsubscribe();
  }

  betsList() {
    this.rouletteSubscription$ = this.rouletteService.bets
      .pipe(filter((bet: RoulettetBetModel) => this.isSameColor(bet)))
      .subscribe((bet: RoulettetBetModel) => this.pushBetToList(bet));
  }

  isSameColor(bet: RoulettetBetModel): boolean {
    const sameColor = this.color === bet.color;

    return sameColor;
  }

  pushBetToList(bet: RoulettetBetModel) {
    this.betListArr.push(bet);
  }
}
