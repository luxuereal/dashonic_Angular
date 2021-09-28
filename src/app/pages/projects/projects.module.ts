import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule, NgbTooltipModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { SimplebarAngularModule } from 'simplebar-angular';
import { ArchwizardModule } from 'angular-archwizard';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { FlatpickrModule } from 'angularx-flatpickr';

import { ProjectsRoutingModule } from './projects-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { WidgetModule } from '../../shared/widget/widget.module';
import { ProjectsGridComponent } from './projects-grid/projects-grid.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsOverviewComponent } from './projects-overview/projects-overview.component';
import { ProjectsCreateComponent } from './projects-create/projects-create.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};

@NgModule({
  declarations: [
    ProjectsGridComponent,
    ProjectsListComponent,
    ProjectsOverviewComponent,
    ProjectsCreateComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    WidgetModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbNavModule,
    FeatherModule.pick(allIcons),
    SimplebarAngularModule,
    ArchwizardModule,
    DropzoneModule,
    FlatpickrModule
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ]
})
export class ProjectsModule { }
