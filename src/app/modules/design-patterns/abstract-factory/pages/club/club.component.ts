import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { BarcelonaPlayerBuildFactory } from '../../factories/barcelona-factory';
import { JuventusPlayerBuildFactory } from '../../factories/juventus-factory';
import { IBuildPlayerFactory } from '../../interfaces/build-player.interface';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {
  playerBuilderFactory: IBuildPlayerFactory;

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(param => this.choosePlayerBuilderFactory(param));
  }

  choosePlayerBuilderFactory(team: Params) {
    const isBarcelonaTeam = team['name'] === 'barcelona';

    if (isBarcelonaTeam) {
      this.playerBuilderFactory = new BarcelonaPlayerBuildFactory();

      return;
    }

    this.playerBuilderFactory =  new JuventusPlayerBuildFactory();
  }
}
