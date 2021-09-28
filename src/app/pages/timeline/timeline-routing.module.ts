import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CenterComponent } from './center/center.component';
import { LeftComponent } from './left/left.component';
import { HorizontalComponent } from './horizontal/horizontal.component';

const routes: Routes = [
    {
        path: 'center',
        component: CenterComponent
    },
    {
        path: 'left',
        component: LeftComponent
    },
    {
        path: 'horizontal',
        component: HorizontalComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TimelineRoutingModule { }
