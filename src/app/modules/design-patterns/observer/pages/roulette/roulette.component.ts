import { Component } from '@angular/core';

import { RouletteService } from '../../services/roulette.service';

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.scss']
})
export class RouletteComponent {

  constructor(private readonly rouletteService: RouletteService) {}

  onPushRandomBets() {
    this.rouletteService.pushRandomBets();
  }

}
