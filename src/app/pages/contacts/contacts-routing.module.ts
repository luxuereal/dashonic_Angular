import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridComponent } from './grid/grid.component';
import { ListComponent } from './list/list.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

const routes: Routes = [
    {
        path: 'grid',
        component: GridComponent
    },
    {
        path: 'list',
        component: ListComponent
    },
    {
        path: 'settings',
        component: UserSettingsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ContactsRoutingModule { }
