import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClubRoutingModule } from './club-routing.module';
import { ClubComponent } from './pages/club/club.component';

@NgModule({
  declarations: [ClubComponent],
  imports: [
    CommonModule,
    ClubRoutingModule
  ]
})
export class ClubModule {}
