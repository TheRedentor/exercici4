import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VacunacioMunicipisPageRoutingModule } from './vacunacio-municipis-routing.module';

import { VacunacioMunicipisPage } from './vacunacio-municipis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VacunacioMunicipisPageRoutingModule
  ],
  declarations: [VacunacioMunicipisPage]
})
export class VacunacioMunicipisPageModule {}
