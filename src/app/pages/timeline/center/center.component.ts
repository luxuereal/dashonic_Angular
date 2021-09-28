import { Component, OnInit } from '@angular/core';

import { timelineModel } from './center.model';
import { timelineData } from './data';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})

/**
 * Timeline center component
 */
export class CenterComponent implements OnInit {

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
      { label: 'Center Timeline', active: true }
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
