import { Component, OnInit } from '@angular/core';

import { projectsList } from './project-list.model';
import { projectList } from './data';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})

/**
 * Project List Component
 */
export class ProjectsListComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  projectList!: projectsList[];
  galleryFilter = 'all';

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Projects' },
      { label: 'Projects List', active: true }
    ];

    /**
    * Data Get Function
    */
    this._fetchData();
  }

  /**
   * Data Fetch
   */
  private _fetchData() {
    this.projectList = projectList;
  }

  /***
   * Active all Products List selected
   */
  activeCategory(category: string) {
    this.galleryFilter = category;
    if (this.galleryFilter === 'all') {
      this.projectList = projectList;
    } else {
      this.projectList = projectList.filter(x => x.category === this.galleryFilter);
    }
  }

}
