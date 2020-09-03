import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClubComponent } from './pages/club/club.component';

const routes: Routes = [
  { path: ':club', component: ClubComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule {}
