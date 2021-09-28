import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MapsRoutingModule } from './maps-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { GoogleComponent } from './google/google.component';
import { LeafletComponent } from './leaflet/leaflet.component';

@NgModule({
  declarations: [
    GoogleComponent,
    LeafletComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE'
    }),
    MapsRoutingModule,
    SharedModule,
    LeafletModule
  ]
})
export class MapsModule { }
