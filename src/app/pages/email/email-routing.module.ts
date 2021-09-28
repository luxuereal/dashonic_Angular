import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InboxComponent } from './inbox/inbox.component';
import { ReademailComponent } from './reademail/reademail.component';

const routes: Routes = [
    {
        path: 'inbox',
        component: InboxComponent
    },
    {
        path: 'read/:id',
        component: ReademailComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class EmailRoutingModule { }
