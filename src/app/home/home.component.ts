import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor() {}
  images: string = 'src/assets/images/register.png';

  onButtonClicked() {
    console.log('Button was clicked in child component');
  }
}
