import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const numbers = Observable.interval(1000);
    numbers.subscribe((number: number) => console.log(number));
  }

}
