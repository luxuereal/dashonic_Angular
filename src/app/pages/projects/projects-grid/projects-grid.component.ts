import { Component, OnInit } from '@angular/core';

import { projectsGrid } from './project-grid.model';
import { projectGrid } from './data';

@Component({
  selector: 'app-projects-grid',
  templateUrl: './projects-grid.component.html',
  styleUrls: ['./projects-grid.component.scss']
})

/**
 * Projects Grid Component
 */
export class ProjectsGridComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  projectGrid!: projectsGrid[];
  galleryFilter = 'all';

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Projects' },
      { label: 'Projects Grid', active: true }
    ];

    /**
     * Data Fetch
     */
    this.projectGrid = projectGrid;
  }

  /***
   * Active all Products Grid selected
   */
  activeCategory(category: string) {
    this.galleryFilter = category;
    if (this.galleryFilter === 'all') {
      this.projectGrid = projectGrid;
    } else {
      this.projectGrid = projectGrid.filter(x => x.category === this.galleryFilter);
    }
  }

}
