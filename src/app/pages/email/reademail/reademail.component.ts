import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-reademail',
  templateUrl: './reademail.component.html',
  styleUrls: ['./reademail.component.scss']
})

/**
 * ReadMail Component
 */
export class ReademailComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  public Editor = ClassicEditor;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Email' },
      { label: 'Read Email', active: true }
    ];
  }

  /**
   * Open modal
   * @param content content
   */
  open(content: any) {
    this.modalService.open(content, { centered: true });
  }

}
