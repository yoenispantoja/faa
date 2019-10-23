import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // para los formularios
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2'; // para los sweetAlerts
import { SCDTableModule } from './../../shared/components/scd-table/scd-table.module';

import { SancionadosRoutingModule } from './sancionados-routing.module';
import { SancionadosComponent } from './sancionados.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [
    CommonModule,
    SancionadosRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
    SCDTableModule
  ],
  declarations: [SancionadosComponent]
})
export class SancionadosModule {}
