import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { SimplebarAngularModule } from 'simplebar-angular';

import { SharedModule } from '../../shared/shared.module';
import { ExtraspagesRoutingModule } from './extraspages-routing.module';
import { StarterComponent } from './starter/starter.component';
import { ProfileComponent } from './profile/profile.component';
import { FaqsComponent } from './faqs/faqs.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    StarterComponent,
    ProfileComponent,
    FaqsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ExtraspagesRoutingModule,
    NgbDropdownModule,
    SwiperModule,
    SimplebarAngularModule,
    NgbAccordionModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class ExtraspagesModule { }
