import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VacunacioMunicipisPage } from './vacunacio-municipis.page';

const routes: Routes = [
  {
    path: '',
    component: VacunacioMunicipisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VacunacioMunicipisPageRoutingModule {}
