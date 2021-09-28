import { Component, OnInit } from '@angular/core';

import { lineChart, multipleYAxisChart, lineAreaChart, lineColumnAreaChart } from "./data";

@Component({
  selector: 'app-mixed',
  templateUrl: './mixed.component.html',
  styleUrls: ['./mixed.component.scss']
})

/**
 * Mixed Component
 */
export class MixedComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  lineChart: any;
  multipleYAxisChart: any;
  lineAreaChart: any;
  lineColumnAreaChart: any;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Charts' },
      { label: 'Mixed Charts', active: true }
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
    this.lineChart = lineChart;
    this.multipleYAxisChart = multipleYAxisChart;
    this.lineAreaChart = lineAreaChart;
    this.lineColumnAreaChart = lineColumnAreaChart;
  }

}
