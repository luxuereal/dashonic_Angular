import { Component, OnInit } from '@angular/core';

import { basicHeatmapChart, multipleSeriesChart, colorRangeChart, rangeWithoutShadesChart } from './data';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.scss']
})

/**
 * Heatmap-Chart Component
 */
export class HeatmapComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  basicHeatmapChart: any;
  multipleSeriesChart: any;
  colorRangeChart: any;
  rangeWithoutShadesChart: any;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Charts' },
      { label: 'Heatmap Charts', active: true }
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
    this.basicHeatmapChart = basicHeatmapChart;
    this.multipleSeriesChart = multipleSeriesChart;
    this.colorRangeChart = colorRangeChart;
    this.rangeWithoutShadesChart = rangeWithoutShadesChart;
  }

}
