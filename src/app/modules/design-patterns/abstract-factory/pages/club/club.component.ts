import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { teamBuilderFactory } from '../../factories/team-builder-factory';
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
    this.activatedRoute.queryParams
      .subscribe(param => this.playerBuilderFactory = teamBuilderFactory(param['team']));
  }
}