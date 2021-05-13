import { Component, OnInit } from '@angular/core';
import { DadesService } from '../services/dades.service';

@Component({
  selector: 'app-vacunacio-comarques',
  templateUrl: './vacunacio-comarques.page.html',
  styleUrls: ['./vacunacio-comarques.page.scss'],
})
export class VacunacioComarquesPage implements OnInit {

  public totals: Array<any>;

  constructor(private dades: DadesService) { }

  ngOnInit() {
    this.dades.dadesComarques().subscribe((data: Array<any>) => {
      // recollim les dades i les guardem a la propietat totals
      this.totals = data;
      // llistem les dades a la cònsola per veure què hem rebut
      console.log(this.totals);
    });
  }
}
