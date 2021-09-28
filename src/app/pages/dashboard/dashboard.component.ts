import { Component, OnInit } from '@angular/core';
import { circle, latLng, tileLayer } from 'leaflet';

import { revenueChart, refundsChart, userChart, orderChart, donutChart, analyticsChart, users } from './data';
import { ChartType } from './dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

/**
 * dashboard Component
 */
export class DashboardComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  revenueChart!: ChartType;
  refundsChart!: ChartType;
  userChart!: ChartType;
  orderChart!: ChartType;
  donutChart!: ChartType;
  analyticsChart!: ChartType;
  users: any;

  constructor() { }

  ngOnInit(): void {

    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Dashonic' },
      { label: 'Sales Analytics', active: true }
    ];

    /**
     * Fetches the data
     */
    this.fetchData();
  }

  /**
   * Fetches the data
   */
  private fetchData() {
    this.revenueChart = revenueChart;
    this.refundsChart = refundsChart;
    this.userChart = userChart;
    this.orderChart = orderChart;
    this.donutChart = donutChart;
    this.analyticsChart = analyticsChart;
    this.users = users;
  }

  /**
   * Sale Location Map
   */
  options = {
    layers: [
      tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw", {
        id: "mapbox/light-v9",
        tileSize: 512,
        zoomOffset: -1,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      })
    ],
    zoom: 1.1,
    center: latLng(28, 1.5)
  };
  layers = [
    circle([41.9, 12.45], { color: "#435fe3", opacity: 0.5, weight: 10, fillColor: "#435fe3", fillOpacity: 1, radius: 400000, }),
    circle([12.05, -61.75], { color: "#435fe3", opacity: 0.5, weight: 10, fillColor: "#435fe3", fillOpacity: 1, radius: 400000, }),
    circle([1.3, 103.8], { color: "#435fe3", opacity: 0.5, weight: 10, fillColor: "#435fe3", fillOpacity: 1, radius: 400000, }),
  ];

}
