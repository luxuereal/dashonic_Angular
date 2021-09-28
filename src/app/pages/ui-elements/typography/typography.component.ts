import { Component, OnInit } from '@angular/core';

import { blockquoteData } from './data';
import { BlockquoteColor } from './typography.model';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})

/**
 * Typography Component
 */
export class TypographyComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  blockquoteData: BlockquoteColor[] = [];

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'UI Elements' },
      { label: 'Typography', active: true }
    ];

    /***
     * Data Get 
    */
    this._fetchData();
  }

  /***
   * Data Get
   */
  private _fetchData() {
    this.blockquoteData = blockquoteData;
  }

}
