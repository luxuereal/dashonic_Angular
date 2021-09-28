import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})

/**
 * Basic pricing component
 */
export class BasicComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Pricing' },
      { label: 'Pricing Basic', active: true }
    ];

    this.check();
  }

  check() {
    const checkBox: any = document.getElementById("plan-switch");
    const month: any = document.getElementsByClassName("month");
    const annual: any = document.getElementsByClassName("annual");

    for (var i = 0; i < month.length; i++) {
      if (checkBox.checked == true) {
        annual[i].style.display = "block";
        month[i].style.display = "none";
      } else if (checkBox.checked == false) {
        annual[i].style.display = "none";
        month[i].style.display = "block";
      }
    }
  }
}
