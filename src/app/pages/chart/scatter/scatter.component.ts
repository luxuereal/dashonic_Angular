import { Component, OnInit } from '@angular/core';

import { basicScatterChart, dateTimeScatterChart, ScatterImagesChart } from './data';

@Component({
  selector: 'app-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.scss']
})

/**
 * Scatter Component
 */
export class ScatterComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  basicScatterChart: any;
  dateTimeScatterChart: any;
  ScatterImagesChart: any;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Charts' },
      { label: 'Scatter Charts', active: true }
    ];

    /**
     * Data Fetch Function
     */
    this._fetchData();
  }

  /**
   * Data Fetch
   */
  public _fetchData() {
    this.basicScatterChart = basicScatterChart;
    this.dateTimeScatterChart = dateTimeScatterChart;
    this.ScatterImagesChart = ScatterImagesChart;
  }

}
