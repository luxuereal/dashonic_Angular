import { Component, OnInit } from '@angular/core';

import { basicBoxChart, scatterBoxChart } from './data';

@Component({
  selector: 'app-boxplot',
  templateUrl: './boxplot.component.html',
  styleUrls: ['./boxplot.component.scss']
})

/**
 * Boxplot Component
 */
export class BoxplotComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  basicBoxChart: any;
  scatterBoxChart: any;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Charts' },
      { label: 'Boxplot Charts', active: true }
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
    this.basicBoxChart = basicBoxChart;
    this.scatterBoxChart = scatterBoxChart;
  }

}
