import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})

/**
 * maintenance Component
 */
export class MaintenanceComponent implements OnInit {

  // set the currenr year
  year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
