import { Component, OnInit } from '@angular/core';

import { DndDropEvent } from 'ngx-drag-drop';

import { tasks } from './data';

import { Task } from './kanban-board.model';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})

/**
 * KanbanBoard Component
 */
export class KanbanBoardComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  upcomingTasks!: Task[];
  inprogressTasks!: Task[];
  completedTasks!: Task[];

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Apps' },
      { label: 'Kanban Board', active: true }
    ];

    /**
     * Data Get Function
     */
    this._fetchData();
  }

  /**
   * on dragging task
   * @param item item dragged
   * @param list list from item dragged
   */
  onDragged(item: any, list: any[]) {
    const index = list.indexOf(item);
    list.splice(index, 1);
  }


  /**
   * On task drop event
   */
  onDrop(event: DndDropEvent, filteredList?: any[], targetStatus?: string) {
    if (filteredList && event.dropEffect === 'move') {
      let index = event.index;

      if (typeof index === 'undefined') {
        index = filteredList.length;
      }

      filteredList.splice(index, 0, event.data);
    }
  }

  /**
   * Data Fetch
   */
  private _fetchData() {
    // all tasks
    this.inprogressTasks = tasks.filter(t => t.status === 'inprogress');
    this.upcomingTasks = tasks.filter(t => t.status === 'open');
    this.completedTasks = tasks.filter(t => t.status === 'completed');
  }

}
