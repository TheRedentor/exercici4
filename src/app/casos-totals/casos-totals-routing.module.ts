import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasosTotalsPage } from './casos-totals.page';

const routes: Routes = [
  {
    path: '',
    component: CasosTotalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasosTotalsPageRoutingModule {}
