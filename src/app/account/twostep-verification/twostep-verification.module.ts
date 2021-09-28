import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgOtpInputModule } from 'ng-otp-input';

import { TwostepverificationRoutingModule } from './twostep-verification-routing.module';
import { BasicComponent } from './basic/basic.component';
import { CoverComponent } from './cover/cover.component';

@NgModule({
  declarations: [
    BasicComponent,
    CoverComponent
  ],
  imports: [
    CommonModule,
    TwostepverificationRoutingModule,
    NgOtpInputModule
  ]
})
export class TwostepVerificationModule { }
