import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule, NgbTypeaheadModule, NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ArchwizardModule } from 'angular-archwizard';
import { FormsModule } from '@angular/forms';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    SharedModule,
    NgbDropdownModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    ArchwizardModule,
    NgbTooltipModule,
    FormsModule
  ]
})
export class InvoicesModule { }
