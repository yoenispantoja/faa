import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables'; //para los datatables
import { ReactiveFormsModule } from '@angular/forms'; //para los formularios
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2'; //para los sweetAlerts

import { IndisciplinasRoutingModule } from './indisciplinas-routing.module';
import { IndisciplinasComponent } from './indisciplinas.component';
import { PageHeaderModule } from '../../shared';
import { AddIndisciplinaComponent } from './modals/add-indisciplina/add-indisciplina.component';
import { NgxSoapModule } from 'ngx-soap';

@NgModule({
  imports: [
    CommonModule,
    IndisciplinasRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule,
    DataTablesModule, 
    NgxSoapModule, 
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    })
  ],
  declarations: [IndisciplinasComponent, AddIndisciplinaComponent]
})
export class IndisciplinasModule {}
