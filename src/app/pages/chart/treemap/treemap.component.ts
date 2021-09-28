import { Component, OnInit } from '@angular/core';

import { basicTreemapChart, MultiDimensionalChart, distributedTreemapChart, colorRangesChart } from './data';

@Component({
  selector: 'app-treemap',
  templateUrl: './treemap.component.html',
  styleUrls: ['./treemap.component.scss']
})

/**
 * Treemap Component
 */
export class TreemapComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  basicTreemapChart: any;
  MultiDimensionalChart: any;
  distributedTreemapChart: any;
  colorRangesChart: any;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Charts' },
      { label: 'Treemaps Charts', active: true }
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
    this.basicTreemapChart = basicTreemapChart;
    this.MultiDimensionalChart = MultiDimensionalChart;
    this.distributedTreemapChart = distributedTreemapChart;
    this.colorRangesChart = colorRangesChart;
  }

}
