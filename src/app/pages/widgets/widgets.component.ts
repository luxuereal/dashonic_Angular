import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { revenueChart, refundsChart, userChart, orderChart, visitorsChart, usersChart, sessionsChart, donutChart, earningDonutChart, inboxData, chatMessagesData } from './data';
import { ChartType, inboxModel, ChatMessage } from './widgets.model';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})

/**
 * Widgets Components
 */
export class WidgetsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  revenueChart!: ChartType;
  refundsChart!: ChartType;
  userChart!: ChartType;
  orderChart!: ChartType;
  visitorsChart!: ChartType;
  usersChart!: ChartType;
  sessionsChart!: ChartType;
  donutChart!: ChartType;
  earningDonutChart!: ChartType;
  inboxData!: inboxModel[];
  chatMessagesData!: ChatMessage[];
  formData!: FormGroup;
  chatSubmit?: boolean;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Components' },
      { label: 'Widgets', active: true }
    ];

    // Validation
    this.formData = this.formBuilder.group({
      message: ['', [Validators.required]],
    });

    /**
     * Fetch the data
     */
    this.fetchData();
  }

  /**
  * Fetches the data
  */
  private fetchData() {
    this.revenueChart = revenueChart;
    this.refundsChart = refundsChart;
    this.userChart = userChart;
    this.orderChart = orderChart;
    this.visitorsChart = visitorsChart;
    this.usersChart = usersChart;
    this.sessionsChart = sessionsChart;
    this.donutChart = donutChart;
    this.earningDonutChart = earningDonutChart;
    this.inboxData = inboxData;
    this.chatMessagesData = chatMessagesData;
  }

  onListScroll() { }

  /**
   * Returns form
   */
  get form() {
    return this.formData.controls;
  }

  /**
   * Save the message in chat
   */
  messageSave() {
    const message = this.formData.get('message')!.value;
    const currentDate = new Date();
    if (this.formData.valid && message) {
      // Message Push in Chat
      this.chatMessagesData.push({
        align: 'right',
        name: 'Kate Dudley',
        profile: 'assets/images/users/avatar-4.jpg',
        message,
        time: currentDate.getHours() + ':' + currentDate.getMinutes(),
      });
      this.onListScroll();

      // Set Form Data Reset
      this.formData = this.formBuilder.group({
        message: null,
      });
    }
  }

}
