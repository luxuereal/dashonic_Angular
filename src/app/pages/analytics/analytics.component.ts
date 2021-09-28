import { Component, OnInit } from '@angular/core';
import { circle, latLng, tileLayer } from 'leaflet';

import { areaChart, columnChart, visitorsChart, userChart, sessionsChart, donutChart, trafficData, channels } from './data';
import { ChartType, TrafficModel } from './analytics.model';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})

/**
 * Analytics Component
 */
export class AnalyticsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  areaChart!: ChartType;
  columnChart!: ChartType;
  visitorsChart!: ChartType;
  userChart!: ChartType;
  sessionsChart!: ChartType;
  donutChart!: ChartType;
  trafficData!: TrafficModel[];
  channels!: any;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Dashboard' },
      { label: 'Analytics', active: true }
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
    this.areaChart = areaChart;
    this.columnChart = columnChart;
    this.visitorsChart = visitorsChart;
    this.userChart = userChart;
    this.sessionsChart = sessionsChart;
    this.donutChart = donutChart;
    this.trafficData = trafficData;
    this.channels = channels;
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
