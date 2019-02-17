import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandantesComponent } from './demandantes.component';


const routes: Routes = [
  {
    path: '', component: DemandantesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandantesRoutingModule { }
