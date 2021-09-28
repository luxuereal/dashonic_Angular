import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { EmailRoutingModule } from './email-routing.module';
import { InboxComponent } from './inbox/inbox.component';
import { SharedModule } from '../../shared/shared.module';
import { ReademailComponent } from './reademail/reademail.component';

@NgModule({
  declarations: [
    InboxComponent,
    ReademailComponent
  ],
  imports: [
    CommonModule,
    EmailRoutingModule,
    SharedModule,
    CKEditorModule,
    NgbDropdownModule,
    NgbPaginationModule
  ]
})
export class EmailModule { }
