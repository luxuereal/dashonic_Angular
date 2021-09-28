import { Component, OnInit } from '@angular/core';

import {
  basicChart, columnWithDataChart, StackedColumnChart, StackedColumn100Chart, ColumnWithMarkerChart, ColumnWithRotatedChart,
  ColumnWithNagetiveChart, rangeColumnChart, dynamicLoadedChart, dynamicQuarterLoadedChart, distributedColumnChart
} from "./data";

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})

/**
 * Apex Column Chart Component
 */
export class ColumnComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  basicChart: any;
  columnWithDataChart: any;
  StackedColumnChart: any;
  StackedColumn100Chart: any;
  ColumnWithMarkerChart: any;
  ColumnWithRotatedChart: any;
  ColumnWithNagetiveChart: any;
  rangeColumnChart: any;
  dynamicLoadedChart: any;
  dynamicQuarterLoadedChart:any;
  distributedColumnChart: any;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Charts' },
      { label: 'Column Charts', active: true }
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
    this.basicChart = basicChart;
    this.columnWithDataChart = columnWithDataChart;
    this.StackedColumnChart = StackedColumnChart;
    this.StackedColumn100Chart = StackedColumn100Chart;
    this.ColumnWithMarkerChart = ColumnWithMarkerChart;
    this.ColumnWithRotatedChart = ColumnWithRotatedChart;
    this.ColumnWithNagetiveChart = ColumnWithNagetiveChart;
    this.rangeColumnChart = rangeColumnChart;
    this.dynamicLoadedChart = dynamicLoadedChart;
    this.dynamicQuarterLoadedChart = dynamicQuarterLoadedChart;
    this.distributedColumnChart = distributedColumnChart;
  }

}
