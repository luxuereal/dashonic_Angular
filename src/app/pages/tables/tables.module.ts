import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { TablesRoutingModule } from './tables-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { BasicComponent } from './basic/basic.component';
import { AdvancedComponent } from './advanced/advanced.component';

@NgModule({
  declarations: [
    BasicComponent,
    AdvancedComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    SharedModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    Ng2SmartTableModule,
    FormsModule
  ]
})
export class TablesModule { }
