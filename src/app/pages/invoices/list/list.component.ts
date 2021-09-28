import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import { InvoiceListSortableDirective, SortEvent } from './list-sortable.directive';
import { InvoiceListService } from './list.service';

import { Table } from './list.model';
import { tableData } from './data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [InvoiceListService, DecimalPipe]
})

/**
 * Invoices List Component
 */
export class ListComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  @ViewChildren(InvoiceListSortableDirective) headers!: QueryList<InvoiceListSortableDirective>;
  tableData!: Table[];
  hideme: boolean[] = [];
  tables$: Observable<Table[]>;
  total$: Observable<number>;
  masterSelected: boolean;
  checklist: any;
  checkedList: any;

  constructor(private modalService: NgbModal, public service: InvoiceListService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
    this.masterSelected = false;
  }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Invoices' },
      { label: 'Invoice List', active: true }
    ];

    /***
     * All Data Get
     */
    this._fetchData();
  }

  /**
   * fetches the table value
   */
  _fetchData() {
    this.tableData = tableData;
    for (let i = 0; i <= this.tableData.length; i++) {
      this.hideme.push(true);
    }
  }

  isDesc: boolean = false;
  column: any = 'invoice_id';

  /**
   * Sort data
   * @param property 
   */
  sort(property: string | number) {
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.tableData.sort((a: any, b: any) => {
      if (a[property] < b[property]) {
        return -1 * direction;
      }
      else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
  };

  /**
   * Open modal
   * @param content modal content
   */
  openModal(content: any) {
    this.modalService.open(content, { size: 'xl', centered: true });
  }

  // The master checkbox will check/ uncheck all items
  checkUncheckAll() {
    for (var i = 0; i < this.tableData.length; i++) {
      this.tableData[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }

  // Check All Checkbox Checked
  isAllSelected() {
    this.masterSelected = this.tableData.every(function (item: any) {
      return item.isSelected == true;
    })
    this.getCheckedItemList();
  }

  // Get List of Checked Items
  getCheckedItemList() {
    this.checkedList = [];
    for (var i = 0; i < this.tableData.length; i++) {
      if (this.tableData[i].isSelected)
        this.checkedList.push(this.tableData[i]);
    }
    this.checkedList = JSON.stringify(this.checkedList);
  }

}
