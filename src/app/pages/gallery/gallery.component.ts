import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

import { projectsGrid } from './gallery.model';
import { projectGrid } from './data';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

/**
 * Gallery Component
 */
export class GalleryComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  projectGrid!: projectsGrid[];
  galleryFilter = 'all';

  images: { src: string; thumb: string; }[] = [];

  constructor(private _lightbox: Lightbox) { 
    projectGrid.forEach((el) => {
      const src = el.image;
      const thumb = el.image;
      const album = {
        src,
        thumb
      };
      this.images.push(album);
    });
  }

  openImage(index: any) {
    this._lightbox.open(this.images, index, {
      showZoom: true
    });
  }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Apps' },
      { label: 'Gallery', active: true }
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
