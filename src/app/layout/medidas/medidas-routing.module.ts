import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedidasComponent } from './medidas.component';


const routes: Routes = [
  {
    path: '',
    component: MedidasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedidasRoutingModule { }
