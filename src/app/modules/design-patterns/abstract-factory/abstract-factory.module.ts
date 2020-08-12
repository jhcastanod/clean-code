import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbstractFactoryRoutingModule } from './abstract-factory-routing.module';
import { ClubComponent } from './pages/club/club.component';


@NgModule({
  declarations: [ClubComponent],
  imports: [
    CommonModule,
    AbstractFactoryRoutingModule
  ]
})
export class AbstractFactoryModule { }
