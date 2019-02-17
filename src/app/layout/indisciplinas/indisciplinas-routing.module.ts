import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndisciplinasComponent } from './indisciplinas.component';


const routes: Routes = [
  {
    path: '', component: IndisciplinasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndisciplinasRoutingModule { }
