import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})

/**
 * Lock Screen basic component
 */
export class BasicComponent implements OnInit {

  // set the currenr year
  year: number = new Date().getFullYear();
  submitted = false;
  lockscreenForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    /**
     * Form Validatyion
     */
    this.lockscreenForm = this.formBuilder.group({
      password: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.lockscreenForm.controls; }

  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.lockscreenForm.invalid) {
      return;
    }
  }

}
