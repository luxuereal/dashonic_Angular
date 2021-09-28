import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})

/**
 * Video Component
 */
export class VideoComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'UI Elements' },
      { label: 'Video', active: true }
    ];
  }

}
