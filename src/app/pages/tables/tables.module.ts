import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

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
    FormsModule
  ]
})
export class TablesModule { }
