import { Component, OnInit } from '@angular/core';
import { DropzoneConfigInterface } from "ngx-dropzone-wrapper";

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.scss']
})

/**
 * File Uploads Component
 */
export class UploadsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  public config: DropzoneConfigInterface = {
    clickable: true,
    autoReset: null,
    errorReset: null
  };

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Forms' },
      { label: 'Form File Upload', active: true }
    ];
  }
}
