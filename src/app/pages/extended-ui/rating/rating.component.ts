import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})

/**
 * Rating Component
 */
export class RatingComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  currentRate = 2;
  currentRate1 = 2;
  defaultSelect = 1;
  hoverSelect = 2;
  hovered = 0;
  readonly = false;
  customColor = 4;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Extended UI' },
      { label: 'Rating', active: true }
    ];
  }


}
