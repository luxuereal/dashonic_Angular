import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightboxModule } from 'ngx-lightbox';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgbRatingModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { extendedUiRoutingModule } from './extended-ui-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { LightboxComponent } from './lightbox/lightbox.component';
import { RangesliderComponent } from './rangeslider/rangeslider.component';
import { SweetalertComponent } from './sweetalert/sweetalert.component';
import { RatingComponent } from './rating/rating.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ToastsContainer } from './notifications/toasts-container.component';
import { SwiperSliderComponent } from './swiper-slider/swiper-slider.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    LightboxComponent,
    RangesliderComponent,
    SweetalertComponent,
    RatingComponent,
    NotificationsComponent,
    ToastsContainer,
    SwiperSliderComponent
  ],
  imports: [
    CommonModule,
    extendedUiRoutingModule,
    SharedModule,
    LightboxModule,
    NgxYoutubePlayerModule,
    NgxSliderModule,
    NgbRatingModule,
    NgbToastModule,
    SwiperModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class ExtendedUiModule { }
