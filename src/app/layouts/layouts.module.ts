import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { SimplebarAngularModule } from 'simplebar-angular';
import { LanguageService } from '../core/services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { ClickOutsideModule } from 'ng-click-outside';

import { LayoutComponent } from './layout.component';
import { VerticalComponent } from './vertical/vertical.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { HorizontaltopbarComponent } from './horizontaltopbar/horizontaltopbar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    VerticalComponent,
    TopbarComponent,
    SidebarComponent,
    RightsidebarComponent,
    FooterComponent,
    HorizontalComponent,
    HorizontaltopbarComponent
  ],
  imports: [
    CommonModule,
    NgbDropdownModule,
    FeatherModule.pick(allIcons),
    SimplebarAngularModule,
    TranslateModule,
    RouterModule,
    ClickOutsideModule
  ],
  providers: [LanguageService]
})
export class LayoutsModule { }
