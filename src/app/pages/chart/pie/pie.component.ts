import { Component, OnInit } from '@angular/core';

import { simplePieChart, simpleDonutChart, monochromePieChart, gradientDonutChart, patternedDonutChart, semiDonutChart, pieWithImageChart } from './data';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})

/**
 * Pie-Chart Component
 */
export class PieComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  simplePieChart: any;
  simpleDonutChart: any;
  monochromePieChart: any;
  gradientDonutChart: any;
  patternedDonutChart: any;
  semiDonutChart: any;
  pieWithImageChart: any;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Charts' },
      { label: 'Pie Charts', active: true }
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
    this.simplePieChart = simplePieChart;
    this.simpleDonutChart = simpleDonutChart;
    this.monochromePieChart = monochromePieChart;
    this.gradientDonutChart = gradientDonutChart;
    this.patternedDonutChart = patternedDonutChart;
    this.semiDonutChart = semiDonutChart;
    this.pieWithImageChart = pieWithImageChart
  }

}
