import { Component, OnInit } from '@angular/core';

import { SwiperOptions } from 'swiper';

import { slideModel } from './swiper-slider.model';
import { slides } from './data';

@Component({
  selector: 'app-swiper-slider',
  templateUrl: './swiper-slider.component.html',
  styleUrls: ['./swiper-slider.component.scss']
})

/**
 * Swiper Slider Component
 */
export class SwiperSliderComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  slides!: slideModel[];
  type: string = 'component';
  show: boolean = true;

  /**
  * Swiper setting
  */
  config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: false,
    pagination: false
  };

  /**
   * Swiper Nav Config setting
   */
  navconfig: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  /**
  * Swiper Nav Config setting
  */
  paginationconfig: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: false,
    pagination: true
  };

/**
 * Swiper Nav Config setting
 */
  multiconfig: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 4,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: true
  };

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Extended UI' },
      { label: 'Swiper Slider', active: true }
    ];

    /**
    * fetches data
    */
    this._fetchData();
  }

  /**
   * User grid data fetches
   */
  private _fetchData() {
    this.slides = slides;
  }

}
