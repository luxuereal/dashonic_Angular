import { Component, OnInit } from '@angular/core';

import { basicPolarChart, monochromeChart } from './data';

@Component({
  selector: 'app-polararea',
  templateUrl: './polararea.component.html',
  styleUrls: ['./polararea.component.scss']
})

/**
 * Polararea-Chart Component
 */
export class PolarareaComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  basicPolarChart: any;
  monochromeChart: any;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Charts' },
      { label: 'Polararea Charts', active: true }
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
    this.basicPolarChart = basicPolarChart;
    this.monochromeChart = monochromeChart;
  }

}
