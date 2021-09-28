import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

/**
 * Carousel component
 */
export class CarouselComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  // Carousel navigation arrow show
  showNavigationArrows: any;
  showNavigationIndicators: any;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'UI Elements' },
      { label: 'Carousel', active: true }
    ];
  }

}
