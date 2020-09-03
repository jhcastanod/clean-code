import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TeamRoutingModule } from './team-routing.module';
import { ClubComponent } from './pages/club/club.component';

@NgModule({
  declarations: [ClubComponent],
  imports: [
    CommonModule,
    TeamRoutingModule
  ]
})
export class TeamModule {}
