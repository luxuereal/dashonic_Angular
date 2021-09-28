import { Component, OnInit, ViewChild } from '@angular/core';

import { SwiperOptions } from 'swiper';
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';

import { slideModel, blogModel } from './profile.model';
import { slides, blogs } from './data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

/**
 * Profile Component
 */
export class ProfileComponent implements OnInit {

  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;

  slides!: slideModel[];
  blogs!: blogModel[];
  type: string = 'component';
  show: boolean = true;

  /**
   * Swiper setting
   */
  config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 3,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  constructor() { }

  ngOnInit(): void {
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
    this.blogs = blogs;
  }

  nextSlide() {
    if (this.componentRef !== undefined) {
      this.componentRef.directiveRef?.nextSlide();
    }
  }
  prevSlide() {
    if (this.componentRef !== undefined) {
      this.componentRef.directiveRef?.prevSlide();
    }
  }
}
