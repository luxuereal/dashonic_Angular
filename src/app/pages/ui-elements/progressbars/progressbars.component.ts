import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbars',
  templateUrl: './progressbars.component.html',
  styleUrls: ['./progressbars.component.scss']
})

/**
 * Progressbars components
 */
export class ProgressbarsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'UI Elements' },
      { label: 'Progress Bars', active: true }
    ];
  }

}
