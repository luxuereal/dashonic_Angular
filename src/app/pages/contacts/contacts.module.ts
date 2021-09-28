import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule, NgbNavModule, NgbTooltipModule, NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { SharedModule } from '../../shared/shared.module';
import { ContactsRoutingModule } from './contacts-routing.module';
import { GridComponent } from './grid/grid.component';
import { ListComponent } from './list/list.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

@NgModule({
  declarations: [
    GridComponent,
    ListComponent,
    UserSettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactsRoutingModule,
    NgbDropdownModule,
    NgbTooltipModule,
    FeatherModule.pick(allIcons),
    FormsModule,
    NgbNavModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class ContactsModule { }
