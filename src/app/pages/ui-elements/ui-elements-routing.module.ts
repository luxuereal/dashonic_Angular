import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
    {
        path: 'alerts',
        component: AlertsComponent
    },
    {
        path: 'buttons',
        component: ButtonsComponent
    },
    {
        path: 'cards',
        component: CardsComponent
    },
    {
        path: 'carousel',
        component: CarouselComponent
    },
    {
        path: 'dropdowns',
        component: DropdownComponent
    },
    {
        path: 'grid',
        component: GridComponent
    },
    {
        path: 'images',
        component: ImagesComponent
    },
    {
        path: 'modals',
        component: ModalsComponent
    },
    {
        path: 'progressbars',
        component: ProgressbarsComponent
    },
    {
        path: 'tabs',
        component: TabsComponent
    },
    {
        path: 'typography',
        component: TypographyComponent
    },
    {
        path: 'video',
        component: VideoComponent
    },
    {
        path: 'general',
        component: GeneralComponent
    },
    {
        path: 'colors',
        component: ColorsComponent
    },
    {
        path: 'utilities',
        component: UtilitiesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UielementsRoutingModule { }
