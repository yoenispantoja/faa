import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../router.animations';
import { LoginService } from '../shared/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    username= "ypantojaz";
    password= "Amelita2019*";
  constructor(private translate: TranslateService, public router: Router, private loginService: LoginService) {
    this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
  }

  ngOnInit() {}

  onLoggedin() {
    //localStorage.setItem('isLoggedin', 'true');
      this.loginService.login(this.username, this.password).subscribe(data => {
          alert(data);
      });

      
  }
}
