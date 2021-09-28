import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarterComponent } from './starter/starter.component';
import { ProfileComponent } from './profile/profile.component';
import { FaqsComponent } from './faqs/faqs.component';

const routes: Routes = [
    {
        path: 'starter',
        component: StarterComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'faqs',
        component: FaqsComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ExtraspagesRoutingModule { }
