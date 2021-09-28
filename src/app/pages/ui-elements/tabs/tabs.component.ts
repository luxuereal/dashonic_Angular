import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})

/**
 * Tabs Component
 */
export class TabsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  public Collapsed = false;
  public firstColleaps = false;
  public secondColleaps = false;
  public bothColleaps = false;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'UI Elements' },
      { label: 'Tabs & Accordions', active: true }
    ];
  }

}
