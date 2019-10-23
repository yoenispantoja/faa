import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ScdTableComponent } from './scd-table.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [CommonModule, RouterModule, DataTablesModule],
  declarations: [ScdTableComponent],
  exports: [ScdTableComponent]
})
export class SCDTableModule {}
