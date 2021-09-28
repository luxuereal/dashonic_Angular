import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Basic404Component } from './basic404/basic404.component';
import { Cover404Component } from './cover404/cover404.component';
import { Basic500Component } from './basic500/basic500.component';
import { Cover500Component } from './cover500/cover500.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';

const routes: Routes = [
  {
    path: '404-basic',
    component: Basic404Component
  },
  {
    path: '404-cover',
    component: Cover404Component
  },
  {
    path: '500-basic',
    component: Basic500Component
  },
  {
    path: '500-cover',
    component: Cover500Component
  },
  {
    path: 'maintenance',
    component: MaintenanceComponent
  },
  {
    path: 'comingsoon',
    component: ComingsoonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ExtrapagesRoutingModule { }
