import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feather-icons',
  templateUrl: './feather-icons.component.html',
  styleUrls: ['./feather-icons.component.scss']
})

/**
 * Feather Icons Component
 */
export class FeatherIconsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Icons' },
      { label: 'Feather Icons', active: true }
    ];
  }

}
