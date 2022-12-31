import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  serverData: JSON;
  usersData: JSON;
  title = 'Frontend2';

  constructor(private httpClient: HttpClient) {
  }

  sayHi() {
    this.httpClient.get('http://127.0.0.1:5000/').subscribe(data => {
      this.serverData = data as JSON;
      console.log(this.serverData);
    })
  }

  getAllUsers() {
    this.httpClient.get('http://127.0.0.1:5000/users').subscribe(data => {
      this.usersData = data as JSON;
      console.log(this.usersData);
    })
  }
}
