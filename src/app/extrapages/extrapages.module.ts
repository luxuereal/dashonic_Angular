import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtrapagesRoutingModule } from './extrapages-routing.module';
import { Basic404Component } from './basic404/basic404.component';
import { Cover404Component } from './cover404/cover404.component';
import { Cover500Component } from './cover500/cover500.component';
import { Basic500Component } from './basic500/basic500.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';

@NgModule({
  declarations: [
    Basic404Component,
    Cover404Component,
    Cover500Component,
    Basic500Component,
    MaintenanceComponent,
    ComingsoonComponent
  ],
  imports: [
    CommonModule,
    ExtrapagesRoutingModule
  ]
})
export class ExtrapagesModule { }
