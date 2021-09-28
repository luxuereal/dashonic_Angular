import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicComponent } from './basic/basic.component';
import { ValidationComponent } from './validation/validation.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { EditorsComponent } from './editors/editors.component';
import { UploadsComponent } from './uploads/uploads.component';
import { WizardComponent } from './wizard/wizard.component';
import { MaskComponent } from './mask/mask.component';

const routes: Routes = [
  {
    path: 'basic',
    component: BasicComponent
  },
  {
    path: 'validation',
    component: ValidationComponent
  },
  {
    path: 'advanced',
    component: AdvancedComponent
  },
  {
    path: 'editors',
    component: EditorsComponent
  },
  {
    path: 'uploads',
    component: UploadsComponent
  },
  {
    path: 'wizard',
    component: WizardComponent
  },
  {
    path: 'mask',
    component: MaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FormRoutingModule { }
