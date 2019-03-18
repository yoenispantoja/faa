import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2'; //para los sweetAlerts

@NgModule({
  imports: [CommonModule, TranslateModule, LoginRoutingModule, FormsModule, SweetAlert2Module.forRoot({
    buttonsStyling: false,
    customClass: 'modal-content',
    confirmButtonClass: 'btn btn-danger',
    cancelButtonClass: 'btn'
  })],
  declarations: [LoginComponent]
})
export class LoginModule {}
