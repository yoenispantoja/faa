import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables'; //para los datatables
import { ReactiveFormsModule } from '@angular/forms'; //para los formularios
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2'; //para los sweetAlerts

import { DemandantesRoutingModule } from './demandantes-routing.module';
import { DemandantesComponent } from './demandantes.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    DemandantesRoutingModule,
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
  declarations: [DemandantesComponent] 
})
export class DemandantesModule {}
