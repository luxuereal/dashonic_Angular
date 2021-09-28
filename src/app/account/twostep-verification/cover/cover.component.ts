import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})

/**
 * 2step verification cover component
 */
export class CoverComponent implements OnInit {

  // set the currenr year
  year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Confirm Otp Verification
   */
  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '80px',
      'height': '50px'
    }
  };

}
