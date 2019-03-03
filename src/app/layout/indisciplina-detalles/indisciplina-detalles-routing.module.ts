import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndisciplinaDetallesComponent } from './indisciplina-detalles.component';

const routes: Routes = [
  {
    path: '',
    component: IndisciplinaDetallesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndisciplinaDetallesRoutingModule { }
