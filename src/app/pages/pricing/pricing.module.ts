import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { PricingRoutingModule } from './pricing-routing.module';
import { BasicComponent } from './basic/basic.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    BasicComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    PricingRoutingModule,
    SharedModule
  ]
})
export class PricingModule { }
