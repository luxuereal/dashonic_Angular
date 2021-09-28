import { Component, OnInit } from '@angular/core';
import { icons } from './data';

@Component({
  selector: 'app-fontawesome',
  templateUrl: './fontawesome.component.html',
  styleUrls: ['./fontawesome.component.scss']
})

/**
 * Fontawsome Component
 */
export class FontawesomeComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  icons: any;
  solid = "";
  regular = "";
  brand = "";

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Icons' },
      { label: 'Font Awesome', active: true }
    ];

    this.icons = icons;

    for (let entry of icons) {
      if (entry.attributes.membership.free.length) {
        for (let value of entry.attributes.membership.free) {
          switch (value) {
            case "brands":
              this.brand += '<div class="col-xl-3 col-lg-4 col-sm-6">\
                          <i class="fab fa-'+ entry.id + '"></i> fab fa-' + entry.id + '\
                      </div>';
              break;
            case 'solid':
              this.solid += '<div class="col-xl-3 col-lg-4 col-sm-6">\
                    <i class="fas fa-'+ entry.id + '"></i> fas fa-' + entry.id + '\
                </div>';
              break;
            default:
              this.regular += '<div class="col-xl-3 col-lg-4 col-sm-6">\
                          <i class="far fa-'+ entry.id + '"></i> far fa-' + entry.id + '\
                      </div>';
          }
        }
      }
    }

    var solid = document.getElementById("solid");
    var brand = document.getElementById("brand");
    var regular = document.getElementById("regular");
    if (solid != null) {
      solid.innerHTML = this.solid;
    }
    if (brand != null) {
      brand.innerHTML = this.brand;
    }
    if (regular != null) {
      regular.innerHTML = this.regular;
    }
  }

}
