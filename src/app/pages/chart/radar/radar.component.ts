import { Component, OnInit } from '@angular/core';

import { basicRadarChart, multipleSeriesChart, polygonFillChart } from './data';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})

/**
 * Radar Component
 */
export class RadarComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  basicRadarChart: any;
  multipleSeriesChart: any;
  polygonFillChart: any;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Charts' },
      { label: 'Radar Charts', active: true }
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
    this.basicRadarChart = basicRadarChart;
    this.multipleSeriesChart = multipleSeriesChart;
    this.polygonFillChart = polygonFillChart;
  }

}
