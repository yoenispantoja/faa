import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SancionadoDetallesRoutingModule } from './sancionado-detalles-routing.module';
import { SancionadoDetallesComponent } from './sancionado-detalles.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  declarations: [SancionadoDetallesComponent],
  imports: [CommonModule, SancionadoDetallesRoutingModule,PageHeaderModule]
})
export class SancionadoDetallesModule {}
