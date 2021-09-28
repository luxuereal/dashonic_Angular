import { Component, OnInit } from '@angular/core';

import { simpleBubbleChart, BubbleChart } from './data';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss']
})

/**
 * Bubble Component
 */
export class BubbleComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  simpleBubbleChart: any;
  BubbleChart: any;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Charts' },
      { label: 'Bubble Charts', active: true }
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
    this.simpleBubbleChart = simpleBubbleChart;
    this.BubbleChart = BubbleChart;
  }


}
