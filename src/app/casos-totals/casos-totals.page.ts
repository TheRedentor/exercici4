import { Component, OnInit } from '@angular/core';
import { DadesService } from '../services/dades.service';

@Component({
  selector: 'app-casos-totals',
  templateUrl: './casos-totals.page.html',
  styleUrls: ['./casos-totals.page.scss'],
})
export class CasosTotalsPage implements OnInit {

  public totals: Array<any>;

  constructor(private dades: DadesService) { }

  ngOnInit() {
    this.dades.dadesTotals().subscribe((data: Array<any>) => {
      // recollim les dades i les guardem a la propietat totals
      this.totals = data;
      // llistem les dades a la cònsola per veure què hem rebut
      console.log(this.totals);
    });
  }
}
