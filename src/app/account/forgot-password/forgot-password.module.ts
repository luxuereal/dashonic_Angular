import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ForgotpasswordRoutingModule } from './forgot-password-routing.module';
import { BasicComponent } from './basic/basic.component';
import { CoverComponent } from './cover/cover.component';

@NgModule({
  declarations: [
    BasicComponent,
    CoverComponent
  ],
  imports: [
    CommonModule,
    ForgotpasswordRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ForgotPasswordModule { }
