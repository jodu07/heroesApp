import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { HeroesComponent } from './pages/heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'detalles/:id', component: DetallesComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'heroes' } //para redireccionar a la pagina principal cuando se ponga cualquier cosa en el navegador
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
