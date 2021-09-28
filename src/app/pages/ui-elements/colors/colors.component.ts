import { Component, OnInit } from '@angular/core';

import { colorsData } from './data';
import { colorsModel } from './colors.model';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})

/**
 * Colors Component
 */
export class ColorsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  colorsData: colorsModel[] = [];

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'UI Elements' },
      { label: 'Colors', active: true }
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
    this.colorsData = colorsData;
  }

}
