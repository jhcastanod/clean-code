import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { teamBuilderFactory } from '../../factories/team-builder-factory';
import { IPlayerFactory } from '../../interfaces/create-player.interface';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {
  playerFactory: IPlayerFactory;

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(param => this.playerFactory = teamBuilderFactory(param['club']));
  }
}