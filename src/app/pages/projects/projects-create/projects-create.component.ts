import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects-create',
  templateUrl: './projects-create.component.html',
  styleUrls: ['./projects-create.component.scss']
})

/**
 * Project Create Component
 */
export class ProjectsCreateComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Projects' },
      { label: 'Create Project', active: true }
    ];
  }

  /**
   * Open modal
   * @param content modal content
   */
   openModal(content: any) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }

}
