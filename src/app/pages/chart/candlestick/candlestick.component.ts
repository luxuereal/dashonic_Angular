import { Component, OnInit } from '@angular/core';

import { basicCandlestickChart, chartCandleOptions, chartBarOptions, categoryXAxisChart } from './data';

@Component({
  selector: 'app-candlestick',
  templateUrl: './candlestick.component.html',
  styleUrls: ['./candlestick.component.scss']
})

/**
 * Candlestick Component
 */
export class CandlestickComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  basicCandlestickChart: any;
  chartCandleOptions: any;
  chartBarOptions: any;
  categoryXAxisChart: any;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Charts' },
      { label: 'Candlestick Charts', active: true }
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
    this.basicCandlestickChart = basicCandlestickChart;
    this.chartCandleOptions = chartCandleOptions;
    this.chartBarOptions = chartBarOptions;
    this.categoryXAxisChart = categoryXAxisChart;
  }

}
