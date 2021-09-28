import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss']
})

/**
 * Form Advanced Component
 */
export class AdvancedComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  componentcolor!: string;
  monolith!: string;
  nano!: string;
  fromNGDate: NgbDate | null = null;
  toNGDate: NgbDate | null = null;
  hoveredDate: NgbDate | null = null;
  hidden!: boolean;
  selected: any;
  @Input() fromDate: Date | null = null;
  @Input() toDate: Date | null = null;
  @Output() dateRangeSelected: EventEmitter<{}> = new EventEmitter();

  date1 = new Date(new Date().setDate(new Date().getDate() + 2));
  date2 = new Date(new Date().setDate(new Date().getDate() + 4));

  disabledDate = [this.date1, this.date2];

  /**
   * Default Select2
   */
  selectedAccount = 'Adam';
  Default = [
    { name: 'Adam' },
    { name: 'Homer' },
    { name: 'Samantha' },
    { name: 'Amalie' },
    { name: 'Estefanía' },
    { name: 'Adrian' },
    { name: 'Wladimir' },
    { name: 'Natasha' },
    { name: 'Nicole' },
    { name: 'Michael' },
    { name: 'Nicolás' }
  ];

  /**
   * Option groups Select2
   */
  selectedGroup = 'Adam';
  Groups = [
    { name: 'Adam', email: 'adam@email.com', age: 12, country: 'United States', child: { state: 'Active' } },
    { name: 'Homer', email: 'homer@email.com', age: 47, country: '', child: { state: 'Active' } },
    { name: 'Samantha', email: 'samantha@email.com', age: 30, country: 'United States', child: { state: 'Active' } },
    { name: 'Amalie', email: 'amalie@email.com', age: 12, country: 'Argentina', child: { state: 'Active' } },
    { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina', child: { state: 'Active' } },
    { name: 'Adrian', email: 'adrian@email.com', age: 21, country: 'Ecuador', child: { state: 'Active' } },
    { name: 'Wladimir', email: 'wladimir@email.com', age: 30, country: 'Ecuador', child: { state: 'Inactive' } },
    { name: 'Natasha', email: 'natasha@email.com', age: 54, country: 'Ecuador', child: { state: 'Inactive' } },
    { name: 'Nicole', email: 'nicole@email.com', age: 43, country: 'Colombia', child: { state: 'Inactive' } },
    { name: 'Michael', email: 'michael@email.com', age: 15, country: 'Colombia', child: { state: 'Inactive' } },
    { name: 'Nicolás', email: 'nicole@email.com', age: 43, country: 'Colombia', child: { state: 'Inactive' } }
  ];

  /**
  * Option Disabled groups Select2
  */
  selectedOption = 'Adam';
  Options = [
    { name: 'Adam' },
    { name: 'Homer', 'disabled': true },
    { name: 'Samantha' },
    { name: 'Amalie' },
    { name: 'Estefanía', 'disabled': true },
    { name: 'Adrian' },
    { name: 'Wladimir' },
    { name: 'Natasha' },
    { name: 'Nicole', 'disabled': true },
    { name: 'Michael' },
    { name: 'Nicolás' }];

  /**
   * Multiple Default Select2
   */
  multiDefaultOption = 'Adam';

  /**
  * Multiple Default Select2
  */
  selectValue = ['Alaska', 'Hawaii', 'California', 'Nevada', 'Oregon', 'Washington', 'Arizona', 'Colorado', 'Idaho', 'Montana', 'Nebraska', 'New Mexico', 'North Dakota', 'Utah', 'Wyoming', 'Alabama', 'Arkansas', 'Illinois', 'Iowa'];

  /**
   * Disabled Select2
   */
  disable = true;
  selectedPeople1 = [
    { name: 'josh@joshuajohnson.co.uk', disabled: true },
    { name: 'joe@bloggs.co.uk', disabled: true }
  ];

  basicDemoValue: any;
  minDateShow = new Date();
  multiDates: Date[] = [new Date(), (new Date() as any)['fp_incr'](10)];
  timePicker: Date | undefined;
  dateTimeValue: Date = new Date();
  rangeValue: { from: Date; to: Date } = {
    from: new Date(),
    to: (new Date() as any)['fp_incr'](10)
  };
  inlineDatePicker: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    this.basicDemoValue = '2017-01-01';
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Forms' },
      { label: 'Form Advanced', active: true }
    ];

    // Component color value of color picker
    this.componentcolor = 'rgba(74, 79, 234, 1)';

    // Monolith color value of color picker
    this.monolith = 'rgba(39, 187, 232, 1)';

    // Nano color value of color picker
    this.nano = 'rgba(247, 204, 83, 1)';

    this.selected = '';
    this.hidden = true;
  }

}
