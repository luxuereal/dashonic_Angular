import { Component, OnInit } from '@angular/core';

import { basicRadialbarChart, multipleRadialbarChart, customAngleChart, gradientCircleChart, strokedCircleChart, semiCircleChart } from './data';

@Component({
  selector: 'app-radialbar',
  templateUrl: './radialbar.component.html',
  styleUrls: ['./radialbar.component.scss']
})

/**
 * Radialbar-chart component
 */
export class RadialbarComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  basicRadialbarChart: any;
  multipleRadialbarChart: any;
  customAngleChart: any;
  gradientCircleChart: any;
  strokedCircleChart: any;
  semiCircleChart: any;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Charts' },
      { label: 'Radialbar Charts', active: true }
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
    this.basicRadialbarChart = basicRadialbarChart;
    this.multipleRadialbarChart = multipleRadialbarChart;
    this.customAngleChart = customAngleChart;
    this.gradientCircleChart = gradientCircleChart;
    this.strokedCircleChart = strokedCircleChart;
    this.semiCircleChart = semiCircleChart;
  }

}
