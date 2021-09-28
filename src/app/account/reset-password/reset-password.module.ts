import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetpasswordRoutingModule } from './reset-password-routing.module';
import { BasicComponent } from './basic/basic.component';
import { CoverComponent } from './cover/cover.component';

@NgModule({
  declarations: [
    BasicComponent,
    CoverComponent
  ],
  imports: [
    CommonModule,
    ResetpasswordRoutingModule
  ]
})
export class ResetPasswordModule { }
