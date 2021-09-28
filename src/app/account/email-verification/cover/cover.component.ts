import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})

/**
 * Email verification Cover component
 */
export class CoverComponent implements OnInit {

  // set the currenr year
  year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
