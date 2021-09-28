import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailverificationRoutingModule } from './email-verification-routing.module';
import { BasicComponent } from './basic/basic.component';
import { CoverComponent } from './cover/cover.component';

@NgModule({
  declarations: [
    BasicComponent,
    CoverComponent
  ],
  imports: [
    CommonModule,
    EmailverificationRoutingModule
  ]
})
export class EmailVerificationModule { }
