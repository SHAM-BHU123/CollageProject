import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  @ViewChild('f') signupForm!: NgForm;
 
  constructor() {}
  onSubmit() {
    console.log(this.signupForm);
  }
}
