import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../router.animations';
import { LoginService } from '../shared/services/login.service';
import { SwalComponent } from '@toverux/ngx-sweetalert2'; //para los sweetAlerts

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  @ViewChild('alertSwal') private alertSwal: SwalComponent;
  username = '';
  password = '';
  constructor(private translate: TranslateService, public ruta: Router, private loginService: LoginService) {
    this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
  }

  ngOnInit() {}

  onLoggedin() {
    /* this.loginService.login(this.username, this.password).subscribe(data => {
          if(data['id']) {
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('userLogged',data['name']);
            this.ruta.navigate(['/dashboard']);
          }
          else this.alertSwal.show();
      });
*/

    this.loginService.auth(this.username, this.password).subscribe(data => {
      if (data['username'] && (data['permiso'] == 1 || data['permiso'] == 2)) {
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('userLogged', data['nombre_completo']);
        localStorage.setItem('userPermiso', data['permiso']);
        this.ruta.navigate(['/dashboard']);
      } else this.alertSwal.show();
    });
  }
}
