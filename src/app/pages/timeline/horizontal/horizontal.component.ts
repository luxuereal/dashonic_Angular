import { Component, OnInit, VERSION, ViewChild } from '@angular/core';

import { SwiperOptions } from 'swiper';
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';

import { slideModel } from './horizontal.model';
import { slides } from './data';

@Component({
  selector: 'app-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.scss']
})

/**
 * Timeline horizontal component
 */
export class HorizontalComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  slides!: slideModel[];
  type: string = 'component';
  show: boolean = true;


  @ViewChild(SwiperDirective) directiveRef?: SwiperDirective;
  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;


  /**
   * Swiper setting
   */
  config = {
    initialSlide: 0,
    slidesPerView: 4,
  };

  /**
   * Swiper setting
   */
   cardConfig = {
    initialSlide: 0,
    slidesPerView: 5,
  };

  constructor() { }

  ngOnInit(): void {
    /**
    * BreadCrumb 
    */
    this.breadCrumbItems = [
      { label: 'Timeline' },
      { label: 'Horizontal Timline', active: true }
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

  /**
   * Swiper Next set
   */
  nextSlide() {
    this.directiveRef!.nextSlide();
  }

  /**
   * Swiper Previous set
   */
  previousSlide() {
    this.directiveRef!.prevSlide();
  }

  /**
   * Swiper card next set
   */
  nextSlideComp() {
    this.componentRef!.directiveRef!.nextSlide();
  }

  /**
   * Swiper card previous set
   */
  previousSlideComp() {
    this.componentRef!.directiveRef!.prevSlide();
  }


}
