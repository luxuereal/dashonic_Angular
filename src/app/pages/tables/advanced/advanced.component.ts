import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Observable } from 'rxjs';
import { advancedSortableDirective, SortEvent } from './advanced-sortable.directive';
import { AdvancedService } from './advanced.service';
import { DecimalPipe } from '@angular/common';

import { Table } from './advanced.model';
import { tableData } from './data';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss'],
  providers: [AdvancedService, DecimalPipe]
})

/**
 * Datatable Component
 */
export class AdvancedComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  @ViewChildren(advancedSortableDirective)
  headers!: QueryList<advancedSortableDirective>;

  tableData!: Table[];

  tables$: Observable<Table[]>;
  total$: Observable<number>;

  constructor(public service: AdvancedService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  isDesc: boolean = false;
  column: any = 'name';

  ngOnInit(): void {
    /**
     * BreadCrumb Set
     */
    this.breadCrumbItems = [
      { label: 'Tables' },
      { label: 'DataTables', active: true }
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
  }

  /**
   * Sort table data
   * @param param0 sort the column
   */
  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

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
}
