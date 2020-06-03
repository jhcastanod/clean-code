import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { Subject } from 'rxjs';

import { getRandomRouletteColor } from 'utils/helpers';
import { RoulettetBetModel } from '../models/roulette-bet.model';

@Injectable({
  providedIn: 'root'
})
export class RouletteService {
  bets = new Subject<RoulettetBetModel>();

  pushRandomBets() {
    const bet = {
      amount: faker.finance.amount(0, 36),
      avatar: faker.image.avatar(),
      color: getRandomRouletteColor(),
      name: faker.name.title()
    };

    this.bets.next(bet);
  }
}
