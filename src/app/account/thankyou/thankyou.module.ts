import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThankyouRoutingModule } from './thankyou-routing.module';
import { BasicComponent } from './basic/basic.component';
import { CoverComponent } from './cover/cover.component';

@NgModule({
  declarations: [
    BasicComponent,
    CoverComponent
  ],
  imports: [
    CommonModule,
    ThankyouRoutingModule
  ]
})
export class ThankyouModule { }
