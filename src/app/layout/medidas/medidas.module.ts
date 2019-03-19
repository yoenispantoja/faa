import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedidasRoutingModule } from './medidas-routing.module';
import { MedidasComponent } from './medidas.component';
import { PageHeaderModule } from './../../shared';
import { DataTablesModule } from 'angular-datatables'; //para los datatables
import { ReactiveFormsModule } from '@angular/forms'; //para los formularios
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';


@NgModule({
  declarations: [MedidasComponent],
  imports: [
    CommonModule, 
    MedidasRoutingModule, 
    PageHeaderModule,
    ReactiveFormsModule,
    DataTablesModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    })
  ]
})
export class MedidasModule {}
