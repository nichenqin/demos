import { ActivatedRoute, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  template: `
    <h3>
      {{errorMessage}}
    </h3>
  `,
  styles: []
})
export class ErrorPageComponent implements OnInit {

  errorMessage: string;

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.data.subscribe((data: Data) => {
      this.errorMessage = data['message'];
    });
  }

}
