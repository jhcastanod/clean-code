import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClubComponent } from './pages/club/club.component';


const routes: Routes = [
  { path: ':club', component: ClubComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbstractFactoryRoutingModule { }
