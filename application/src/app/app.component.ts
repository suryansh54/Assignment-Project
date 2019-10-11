import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName: string;

  getUserName(){
    return sessionStorage.getItem('userName');
  }

  constructor() {
    this.userName = this.getUserName();
  }
}
