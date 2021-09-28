import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { Usergrid } from './grid.model';
import { userGridData } from './data';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

/**
 * Grid Component
 */
export class GridComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  userGridData!: Usergrid[];
  selected: any;
  userForm!: FormGroup;
  submitted = false;
  items!: FormArray;
  totalRecords = 0;

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Contacts' },
      { label: 'User Grid', active: true }
    ];

    /**
     * Form Validation
     */
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });

    /**
     * fetches data
     */
    this._fetchData();
  }

  /**
   * User grid data fetches
   */
  private _fetchData() {
    this.userGridData = userGridData;
    this.totalRecords = userGridData.length;
  }

  /**
   * Open modal
   * @param content modal content
   */
  openModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { centered: true });
  }

  /**
   * Form data get
   */
  get form() {
    return this.userForm.controls;
  }

  /**
   * Save user
   */
  saveUser() {
    if (this.userForm.valid) {
      const name = this.userForm.get('name')?.value;
      const email = this.userForm.get('email')?.value;
      const designation = this.userForm.get('designation')?.value;
      const image = 'assets/images/users/avatar-1.jpg';
      this.userGridData.push({
        id: this.userGridData.length + 1,
        name,
        email,
        designation,
        image
      })
      this.modalService.dismissAll()
    }
    this.submitted = true
  }

}
