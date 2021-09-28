import { Component, OnInit } from '@angular/core';

import {
  basicLineChart, zoomableTimeseriesChart, lineWithDataLabelsChart, dashedLineChart, lineAnnotationsChart,
  SyncingLineChart, SyncingAreaChart, brushLineChart, brushAreaChart, stepLineChart, gradientChart, missingDataChart
} from './data';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})

/**
 * Apex line chart component
 */
export class LineComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  basicLineChart: any;
  zoomableTimeseriesChart: any;
  lineWithDataLabelsChart: any;
  dashedLineChart: any;
  lineAnnotationsChart: any;
  SyncingLineChart: any;
  SyncingAreaChart: any;
  brushLineChart: any;
  brushAreaChart: any;
  stepLineChart: any;
  gradientChart: any;
  missingDataChart: any;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Charts' },
      { label: 'Line Charts', active: true }
    ];

    // Data Get Function
    this._fetchData();
  }

  /**
   * Fetches the chart data
   */
  private _fetchData() {
    this.basicLineChart = basicLineChart;
    this.zoomableTimeseriesChart = zoomableTimeseriesChart;
    this.lineWithDataLabelsChart = lineWithDataLabelsChart;
    this.dashedLineChart = dashedLineChart;
    this.lineAnnotationsChart = lineAnnotationsChart;
    this.SyncingLineChart = SyncingLineChart;
    this.SyncingAreaChart = SyncingAreaChart;
    this.brushLineChart = brushLineChart;
    this.brushAreaChart = brushAreaChart;
    this.stepLineChart = stepLineChart;
    this.gradientChart = gradientChart;
    this.missingDataChart = missingDataChart;
  }

}
