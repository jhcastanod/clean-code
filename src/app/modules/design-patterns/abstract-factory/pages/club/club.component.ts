import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

import { teamBuilderFactory } from '../../factories/team-factory';
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
    this.activatedRoute.paramMap
      .subscribe((param: Params) => this.playerFactory = teamBuilderFactory(param.get('club')));
  }
}