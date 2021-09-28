import { Component, OnInit } from '@angular/core';

import { buttonsData } from './data';
import { buttonColor } from './buttons.model';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})

/**
 * Buttons Component
 */
export class ButtonsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  buttonsData: buttonColor[] = [];

  constructor() { }

  checkboxvalue = {
    left: true,
    middle: false,
    right: false
  };

  model = 1;

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'UI Elements' },
      { label: 'Buttons', active: true }
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
    this.buttonsData = buttonsData;
  }

}
