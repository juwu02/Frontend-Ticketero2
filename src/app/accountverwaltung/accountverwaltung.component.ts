import { Component } from '@angular/core';
import { LoginService } from "../login.service";
import {User} from "../user";

@Component({
  selector: 'app-accountverwaltung',
  templateUrl: './accountverwaltung.component.html',
  styleUrls: ['./accountverwaltung.component.scss']
})
export class AccountverwaltungComponent {

  user: User;

  constructor(private loginService: LoginService) {
    this.loginService.user.subscribe(x => this.user = x);
  }

  logout(){
    this.loginService.logout();
  }

}
