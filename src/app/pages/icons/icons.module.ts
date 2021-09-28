import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';

import { IconsRoutingModule } from './icons-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { UniconsComponent } from './unicons/unicons.component';
import { BoxiconsComponent } from './boxicons/boxicons.component';
import { MaterialdesignComponent } from './materialdesign/materialdesign.component';
import { FontawesomeComponent } from './fontawesome/fontawesome.component';
import { FeatherIconsComponent } from './feather-icons/feather-icons.component';

@NgModule({
  declarations: [
    UniconsComponent,
    BoxiconsComponent,
    MaterialdesignComponent,
    FontawesomeComponent,
    FeatherIconsComponent
  ],
  imports: [
    CommonModule,
    IconsRoutingModule,
    SharedModule,
    FeatherModule.pick(allIcons),
  ]
})
export class IconsModule { }
