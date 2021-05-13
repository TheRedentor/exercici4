import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VacunacioComarquesPage } from './vacunacio-comarques.page';

const routes: Routes = [
  {
    path: '',
    component: VacunacioComarquesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VacunacioComarquesPageRoutingModule {}
