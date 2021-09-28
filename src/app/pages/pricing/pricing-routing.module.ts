import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicComponent } from './basic/basic.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: 'basic',
    component: BasicComponent
  },
  {
    path: 'table',
    component: TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricingRoutingModule { }
