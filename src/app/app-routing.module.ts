import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'casos-totals',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'casos-totals',
    loadChildren: () => import('./casos-totals/casos-totals.module').then( m => m.CasosTotalsPageModule)
  },
  {
    path: 'vacunacio-municipis',
    loadChildren: () => import('./vacunacio-municipis/vacunacio-municipis.module').then( m => m.VacunacioMunicipisPageModule)
  },
  {
    path: 'vacunacio-comarques',
    loadChildren: () => import('./vacunacio-comarques/vacunacio-comarques.module').then( m => m.VacunacioComarquesPageModule)
  },
  {
    path: 'buscador',
    loadChildren: () => import('./buscador/buscador.module').then( m => m.BuscadorPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
