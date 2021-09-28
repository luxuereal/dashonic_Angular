import { Component, OnInit } from '@angular/core';

import { generalData } from './data';
import { generalModel } from './general.model';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})

/**
 * General Component
 */
export class GeneralComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  generalData: generalModel[] = [];

  default = 1;
  defaultwithicon = 2;
  page = 1;
  pages = 2;
  largepage = 1;
  smallpage = 2;
  alignpage1 = 1;
  alignpage2 = 2;
  rounded = 1;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'UI Elements' },
      { label: 'General', active: true }
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
    this.generalData = generalData;
  }

}
