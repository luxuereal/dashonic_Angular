import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})

/**
 * User Settings Component
 */
export class UserSettingsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  /**
   * Multiple Default Select2
   */
  selectValue = ['Photoshop', 'illustrator', 'HTML', 'CSS', 'Javascript', 'Php', 'Python'];
  selectedCars = ['Photoshop'];

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Contacts' },
      { label: 'Settings', active: true }
    ];
  }

}
