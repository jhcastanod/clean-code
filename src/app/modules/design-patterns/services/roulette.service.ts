import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { Subject } from 'rxjs';

import { blackGreenOrRedColor } from 'utils/helpers';
import { RoulettetBetModel } from '../models/roulette.model';


@Injectable({
  providedIn: 'root'
})
export class RouletteService {
  bets = new Subject<RoulettetBetModel>();

  generateRandomBets(): RoulettetBetModel[] {
    const bets = [];
    const bet = {
      amount: faker.finance.amount(0, 36),
      avatar: faker.image.avatar(),
      color: blackGreenOrRedColor(),
      name: faker.name.title()
    };

    bets.push(bet);

    return bets;
  }
}
