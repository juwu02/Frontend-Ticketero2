import { Component } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import { LoginService } from "../login.service";
import {User} from "../user";

@Component({
  selector: 'app-anmeldemaske',
  templateUrl: './anmeldemaske.component.html',
  styleUrls: ['./anmeldemaske.component.scss']
})
export class AnmeldemaskeComponent {

  //users: User[] = [];
  user: User;

  email: string = "";
  password: string = "";

  submit() {
    console.log("Der User " + this.email + " ist eingeloggt")
    this.clear();
  }

  clear(){
    this.email = "";
    this.password = "";
  }

  email1 = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email1.hasError('email') ? 'Keine echte E-Mail Adresse' : '';
  }

  hide=true;

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    this.loginService.getUsers()
      .subscribe(x => {
        console.log(x)
        this.user = x
      });

}}
