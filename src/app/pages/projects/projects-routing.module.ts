import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsGridComponent } from './projects-grid/projects-grid.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsOverviewComponent } from './projects-overview/projects-overview.component';
import { ProjectsCreateComponent } from './projects-create/projects-create.component';

const routes: Routes = [
    {
        path: 'project-grid',
        component: ProjectsGridComponent
    },
    {
        path: 'project-list',
        component: ProjectsListComponent
    },
    {
        path: 'project-overview',
        component: ProjectsOverviewComponent
    },
    {
        path: 'project-create',
        component: ProjectsCreateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProjectsRoutingModule { }
