import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndisciplinaDetallesRoutingModule } from './indisciplina-detalles-routing.module';
import { IndisciplinaDetallesComponent } from './indisciplina-detalles.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  declarations: [IndisciplinaDetallesComponent],
  imports: [
    CommonModule,
    PageHeaderModule,
    IndisciplinaDetallesRoutingModule
  ]
})
export class IndisciplinaDetallesModule { }
