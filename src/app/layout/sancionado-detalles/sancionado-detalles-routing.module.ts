import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SancionadoDetallesComponent } from './sancionado-detalles.component';

const routes: Routes = [
  {
    path: '',
    component: SancionadoDetallesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SancionadoDetallesRoutingModule { }
