import { SCDTableModule } from './../../shared/components/scd-table/scd-table.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';
import { ArchwizardModule } from 'ng2-archwizard';

@NgModule({
  imports: [CommonModule, BlankPageRoutingModule, ArchwizardModule, SCDTableModule],
  declarations: [BlankPageComponent]
})
export class BlankPageModule {}
