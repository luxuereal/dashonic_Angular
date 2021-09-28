import { Component, OnInit } from '@angular/core';

import { basicTimelineChart, differentColorChart, multiSeriesTimelineChart, advancedTimelineChart } from "./data";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})

/**
 * Timeline Component
 */
export class TimelineComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  basicTimelineChart: any;
  differentColorChart: any;
  multiSeriesTimelineChart: any;
  advancedTimelineChart: any;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Charts' },
      { label: 'Timeline Charts', active: true }
    ];

    /**
     * data fetch function
     */
    this._fetchData();
  }

  /**
   * Data Fetch
   */
  public _fetchData() {
    this.basicTimelineChart = basicTimelineChart;
    this.differentColorChart = differentColorChart;
    this.multiSeriesTimelineChart = multiSeriesTimelineChart;
    this.advancedTimelineChart = advancedTimelineChart;
  }

}
