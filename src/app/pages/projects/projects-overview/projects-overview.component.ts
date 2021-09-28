import { Component, OnInit } from '@angular/core';

import { taskModel, teamModel, messageModel, attachmentsModel } from './projects-overview.model';
import { taskList, teamData, messageData, attachmentsData } from './data';

@Component({
  selector: 'app-projects-overview',
  templateUrl: './projects-overview.component.html',
  styleUrls: ['./projects-overview.component.scss']
})

/**
 * Projects Overview Component
 */
export class ProjectsOverviewComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  taskList!: taskModel[];
  teamData!: teamModel[];
  messageData!: messageModel[];
  attachmentsData!: attachmentsModel[];

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Projects' },
      { label: 'Project Overview', active: true }
    ];

    /**
     * fetches data
     */
    this._fetchData();
  }

  /**
   * User grid data fetches
   */
  private _fetchData() {
    this.teamData = teamData;
    this.taskList = taskList;
    this.messageData = messageData;
    this.attachmentsData = attachmentsData;
  }

}
