import { Component, OnInit } from '@angular/core';
import { DadesService } from '../services/dades.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.page.html',
  styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage implements OnInit {

  public totals: Array<any>;

  constructor(private dades: DadesService) { }

  ngOnInit() { 
    this.dades.dadesMunicipi('').subscribe((data: Array<any>) => {
      // recollim les dades i les guardem a la propietat totals
      this.totals = data;
      // llistem les dades a la cònsola per veure què hem rebut
      console.log(this.totals);
    });
  }

  _ionChange(event){
    const val = event.target.value;
    console.log(val);
    this.dades.dadesMunicipi(val.toUpperCase()).subscribe((data: Array<any>) => {
      // recollim les dades i les guardem a la propietat totals
      this.totals = data;
      // llistem les dades a la cònsola per veure què hem rebut
      console.log(this.totals);
    });
  }
}
