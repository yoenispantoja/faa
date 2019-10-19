import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { PageHeaderModule } from './../../shared';
import { DataTablesModule } from 'angular-datatables'; //para los datatables
import { ReactiveFormsModule } from '@angular/forms'; //para los formularios
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { AddUsuarioComponent } from './modals/add-usuario/add-usuario.component';


@NgModule({
  declarations: [UsuariosComponent, AddUsuarioComponent],
  imports: [
    CommonModule, 
    UsuariosRoutingModule, 
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
export class UsuariosModule {}
