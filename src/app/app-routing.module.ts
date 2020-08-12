import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'team',
    loadChildren: () => import('./modules/design-patterns/abstract-factory/abstract-factory.module').then(m => m.AbstractFactoryModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
