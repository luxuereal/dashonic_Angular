import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  NgbAlertModule, NgbDropdownModule, NgbCarouselModule, NgbTooltipModule, NgbPopoverModule, NgbProgressbarModule,
  NgbNavModule, NgbCollapseModule, NgbAccordionModule, NgbPaginationModule, NgbButtonsModule
} from '@ng-bootstrap/ng-bootstrap';

import { UielementsRoutingModule } from './ui-elements-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AlertsComponent } from './alerts/alerts.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { GridComponent } from './grid/grid.component';
import { ImagesComponent } from './images/images.component';
import { ModalsComponent } from './modals/modals.component';
import { ProgressbarsComponent } from './progressbars/progressbars.component';
import { TabsComponent } from './tabs/tabs.component';
import { TypographyComponent } from './typography/typography.component';
import { VideoComponent } from './video/video.component';
import { GeneralComponent } from './general/general.component';
import { ColorsComponent } from './colors/colors.component';
import { UtilitiesComponent } from './utilities/utilities.component';

@NgModule({
  declarations: [
    AlertsComponent,
    ButtonsComponent,
    CardsComponent,
    CarouselComponent,
    DropdownComponent,
    GridComponent,
    ImagesComponent,
    ModalsComponent,
    ProgressbarsComponent,
    TabsComponent,
    TypographyComponent,
    VideoComponent,
    GeneralComponent,
    ColorsComponent,
    UtilitiesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UielementsRoutingModule,
    SharedModule,
    NgbAlertModule,
    NgbDropdownModule,
    NgbCarouselModule,
    NgbTooltipModule,
    NgbPopoverModule,
    NgbProgressbarModule,
    NgbNavModule,
    NgbCollapseModule,
    NgbAccordionModule,
    NgbPaginationModule,
    NgbButtonsModule
  ]
})
export class UiElementsModule { }
