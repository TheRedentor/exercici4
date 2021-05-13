import { Component, OnInit, ViewChild } from '@angular/core';
import { DadesService } from '../services/dades.service';

@Component({
  selector: 'app-vacunacio-municipis',
  templateUrl: './vacunacio-municipis.page.html',
  styleUrls: ['./vacunacio-municipis.page.scss'],
})
export class VacunacioMunicipisPage implements OnInit {

  public totals: Array<any>;

  constructor(private dades: DadesService) { }

  ngOnInit() {
    this.dades.dadesMunicipis().subscribe((data: Array<any>) => {
      // recollim les dades i les guardem a la propietat totals
      this.totals = data;
      // llistem les dades a la cònsola per veure què hem rebut
      console.log(this.totals);
    });
  }
}
