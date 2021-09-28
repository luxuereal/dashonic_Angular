import { Component, OnInit, ViewChild } from '@angular/core';

import {
  basicAreaChart, splineAreaChart, datetimeXaxisChart,
  nagativeValueChart, githubmMonthAreaChart, githubmYearAreaChart,
  stackedAreaChart, nullValuesAreaChart
} from "./data";

import { ChartComponent } from "ng-apexcharts";

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})

/**
 * Area Component
 */
export class AreaComponent implements OnInit {

  @ViewChild("chart", { static: false })
  chart!: ChartComponent;
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  basicAreaChart: any;
  splineAreaChart: any;
  datetimeXaxisChart: any;
  nagativeValueChart: any;
  githubmMonthAreaChart: any;
  githubmYearAreaChart: any;
  activeOptionButton = "all";
  stackedAreaChart: any;
  nullValuesAreaChart: any;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Charts' },
      { label: 'Area Charts', active: true }
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
    this.basicAreaChart = basicAreaChart;
    this.splineAreaChart = splineAreaChart;
    this.datetimeXaxisChart = datetimeXaxisChart;
    this.nagativeValueChart = nagativeValueChart;
    this.githubmMonthAreaChart = githubmMonthAreaChart;
    this.githubmYearAreaChart = githubmYearAreaChart;
    this.stackedAreaChart = stackedAreaChart;
    this.nullValuesAreaChart = nullValuesAreaChart;
  }

  public updateOptionsData = {
    "1m": {
      xaxis: {
        min: new Date("28 Jan 2013").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    "6m": {
      xaxis: {
        min: new Date("27 Sep 2012").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    "1y": {
      xaxis: {
        min: new Date("27 Feb 2012").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    "1yd": {
      xaxis: {
        min: new Date("01 Jan 2013").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    all: {
      xaxis: {
        min: undefined,
        max: undefined
      }
    }
  };
  public updateOptions(option: any): void {
    this.activeOptionButton = option;
    this.chart.updateOptions(this.updateOptionsData, false, true, true);
  }
}
