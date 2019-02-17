import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SancionadosComponent } from './sancionados.component';


const routes: Routes = [
  {
    path: '', component: SancionadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SancionadosRoutingModule { }
