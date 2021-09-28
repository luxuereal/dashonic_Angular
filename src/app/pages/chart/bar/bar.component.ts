import { Component, OnInit } from '@angular/core';

import {
  basicBarChart, customDataLabelsChart, stackedBarChart, stacked100BarChart, barWithNegativeChart,
  barWithMarkersChart, reversedBarChart, patternedChart, groupedBarChart, barWithImageChart
} from "./data";

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})

/**
 * Bar Component
 */
export class BarComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  basicBarChart: any;
  customDataLabelsChart: any;
  stackedBarChart: any;
  stacked100BarChart: any;
  barWithNegativeChart: any;
  barWithMarkersChart: any;
  reversedBarChart: any;
  patternedChart: any;
  groupedBarChart: any;
  barWithImageChart: any;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Charts' },
      { label: 'Bar Charts', active: true }
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
    this.basicBarChart = basicBarChart;
    this.customDataLabelsChart = customDataLabelsChart;
    this.stackedBarChart = stackedBarChart;
    this.stacked100BarChart = stacked100BarChart;
    this.barWithNegativeChart = barWithNegativeChart;
    this.barWithMarkersChart = barWithMarkersChart;
    this.reversedBarChart = reversedBarChart;
    this.patternedChart = patternedChart;
    this.groupedBarChart = groupedBarChart;
    this.barWithImageChart = barWithImageChart;
  }

}
