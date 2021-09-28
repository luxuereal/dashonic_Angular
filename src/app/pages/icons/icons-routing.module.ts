import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UniconsComponent } from './unicons/unicons.component';
import { BoxiconsComponent } from './boxicons/boxicons.component';
import { MaterialdesignComponent } from './materialdesign/materialdesign.component';
import { FontawesomeComponent } from './fontawesome/fontawesome.component';
import { FeatherIconsComponent } from './feather-icons/feather-icons.component';

const routes: Routes = [
    {
        path: 'unicons',
        component: UniconsComponent
    },
    {
        path: 'boxicons',
        component: BoxiconsComponent
    },
    {
        path: 'materialdesign',
        component: MaterialdesignComponent
    },
    {
        path: 'font-awesome',
        component: FontawesomeComponent
    },
    {
        path: 'feather-icon',
        component: FeatherIconsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class IconsRoutingModule { }
