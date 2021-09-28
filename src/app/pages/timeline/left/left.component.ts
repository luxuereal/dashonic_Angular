import { Component, OnInit } from '@angular/core';

import { timelineModel } from './left.model';
import { timelineData } from './data';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})

/**
 * Timeline left component
 */
export class LeftComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  timelineData!: timelineModel[];

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Timeline' },
      { label: 'Left Timeline', active: true }
    ];

    /**
    * Data Get Function
    */
    this._fetchData();
  }

  /**
   * Data Fetch
   */
  private _fetchData() {
    this.timelineData = timelineData;
  }

}
