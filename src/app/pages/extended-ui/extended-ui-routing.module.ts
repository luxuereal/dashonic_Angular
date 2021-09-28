import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LightboxComponent } from './lightbox/lightbox.component';
import { RangesliderComponent } from './rangeslider/rangeslider.component';
import { SweetalertComponent } from './sweetalert/sweetalert.component';
import { RatingComponent } from './rating/rating.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SwiperSliderComponent } from './swiper-slider/swiper-slider.component';

const routes: Routes = [
    {
        path: 'lightbox',
        component: LightboxComponent
    },
    {
        path: 'rangeslider',
        component: RangesliderComponent
    },
    {
        path: 'sweet-alert',
        component: SweetalertComponent
    },
    {
        path: 'rating',
        component: RatingComponent
    },
    {
        path: 'notification',
        component: NotificationsComponent
    },
    {
        path: 'swiper-slider',
        component: SwiperSliderComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class extendedUiRoutingModule { }
