import { Component, OnInit } from '@angular/core';

import { recentModel, ChartType } from './file-manager.model';
import { storageChart, recent } from './data';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})

/**
 * FileManager Component
 */
export class FileManagerComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  recent!: recentModel[];
  storageChart!: ChartType;

  isVisible: Boolean = true;

  constructor() { }

  toggle() {
    this.isVisible = !this.isVisible;
  }

  remove(){
    document.getElementById('alertremove')!.classList.remove('show');
  }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Apps' },
      { label: 'File Manager', active: true }
    ];

    /**
     * Data Get Function
     */
    this._fetchData();
  }

  /**
   * Data Fetch
   */
  private _fetchData() {
    this.storageChart = storageChart;
    this.recent = recent;
  }



}
