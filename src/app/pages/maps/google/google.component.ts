import { Component, OnInit, ViewChild, Input, Inject, PLATFORM_ID } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})

/**
 * Goole Map Component
 */
export class GoogleComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  longitude = 20.728218;
  latitude = 52.128973;
  markers: any;
  zoom: number = 15;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private mapsAPILoader: MapsAPILoader) { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Maps' },
      { label: 'Google maps', active: true }
    ];

    if (isPlatformBrowser(this.platformId)) {
      this.mapsAPILoader.load().then(() => {
        const center = { lat: this.latitude, lng: this.longitude };
      });
    }
  }

}
