import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DadesService {

  constructor(private http: HttpClient) { }

  dadesTotals(){
    const apiURL = "https://analisi.transparenciacatalunya.cat/resource/623z-r97q.json";
    return this.http.get(apiURL);
  }

  dadesComarques(){
    const apiURL = "https://analisi.transparenciacatalunya.cat/resource/irki-p3c7.json?$select=comarca,fabricant,sum(recompte)%20as%20total&$group=comarca,fabricant";
    return this.http.get(apiURL);
  }

  dadesMunicipis(){
    const apiURL = "https://analisi.transparenciacatalunya.cat/resource/irki-p3c7.json?$select=municipi,fabricant,sum(recompte)%20as%20total&$group=municipi,fabricant";
    return this.http.get(apiURL);
  }

  dadesMunicipi(municipi){
    const apiURL = "https://analisi.transparenciacatalunya.cat/resource/irki-p3c7.json?municipi="+municipi;
    return this.http.get(apiURL);
  }
     
}
