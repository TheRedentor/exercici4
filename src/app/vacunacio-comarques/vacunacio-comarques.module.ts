import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VacunacioComarquesPageRoutingModule } from './vacunacio-comarques-routing.module';

import { VacunacioComarquesPage } from './vacunacio-comarques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VacunacioComarquesPageRoutingModule
  ],
  declarations: [VacunacioComarquesPage]
})
export class VacunacioComarquesPageModule {}
