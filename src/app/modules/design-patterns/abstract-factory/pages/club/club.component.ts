import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { teamBuilderFactory } from '../../factories/team.factory';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {
  // TODO: Add type
  players;

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param: Params) => {
      const playerFactory = teamBuilderFactory(param.get('club'));
      const goalKeeper = playerFactory.createGoalKeeper().toJSON();
      const midField = playerFactory.createMidField().toJSON();
      const striker = playerFactory.createStriker().toJSON();

      this.players = { goalKeeper, midField, striker };
    });
  }
}