import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { TimelineRoutingModule } from './timeline-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CenterComponent } from './center/center.component';
import { LeftComponent } from './left/left.component';
import { HorizontalComponent } from './horizontal/horizontal.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    CenterComponent,
    LeftComponent,
    HorizontalComponent
  ],
  imports: [
    CommonModule,
    TimelineRoutingModule,
    SharedModule,
    SwiperModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class TimelineModule { }
