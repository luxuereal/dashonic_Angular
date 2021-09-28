import { Component, OnInit } from '@angular/core';

import { alertData } from './data';
import { AlertColor } from './alerts.model';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})

/**
 * Alerts Component
 */
export class AlertsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  alertData: AlertColor[] = [];

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'UI Elements' },
      { label: 'Alerts', active: true }
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
    this.alertData = alertData;
  }

  /***
   * Alerts remove notification
   */
  close(alert: AlertColor, alertData: AlertColor[]) {
    alertData.splice(alertData.indexOf(alert), 1);
  }

}
