import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { Subject } from 'rxjs';

import { RouletteModel } from '../roulette.model';

@Injectable({
  providedIn: 'root'
})
export class RouletteService {
  generateRandomBets() {
    const bet = {
      amount: faker.finance.amount(0, 36),
      avatar: faker.image.avatar(),
      color: faker.commerce.color(),
      name: faker.name.title()
    };

    return bet;
  }

  getBets() {
    const bets = new Subject<RouletteModel>();

    return bets;
  }
}
