import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables'; //para los datatables
import { ReactiveFormsModule } from '@angular/forms'; //para los formularios
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2'; //para los sweetAlerts

import { SancionadosRoutingModule } from './sancionados-routing.module';
import { SancionadosComponent } from './sancionados.component';
import { PageHeaderModule } from './../../shared';
import { EditSancionadoComponent } from './modals/edit-sancionado/edit-sancionado.component';


@NgModule({
  imports: [
    CommonModule,
    SancionadosRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule,
    DataTablesModule,  
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    })
  ],
  declarations: [SancionadosComponent, EditSancionadoComponent]
})
export class SancionadosModule {}
