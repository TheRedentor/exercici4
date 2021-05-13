import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasosTotalsPageRoutingModule } from './casos-totals-routing.module';

import { CasosTotalsPage } from './casos-totals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasosTotalsPageRoutingModule
  ],
  declarations: [CasosTotalsPage]
})
export class CasosTotalsPageModule {}
