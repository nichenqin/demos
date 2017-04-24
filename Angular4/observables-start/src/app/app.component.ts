import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user1Activate = false;
  user2Activate = false;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    console.log('on init');
    this.usersService.userAcitvate.subscribe(
      (id: number) => {
        if (id === 1) {
          this.user1Activate = true;
        } else if (id === 2) {
          this.user2Activate = true;
        }
      }
    )
  }

}
