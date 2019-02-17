import { Component, OnInit } from '@angular/core';
import { ArchwizardModule } from 'ng2-archwizard';

@Component({
  selector: 'app-blank-page',
  templateUrl: './blank-page.component.html',
  styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  finishFunction(){
      console.log('Say hello');
  }
}
