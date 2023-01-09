import { Injectable } from '@angular/core';
import { User } from "./user";
import { Observable, of } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {
  }


  getUsers(): Observable<User> {
    const users = this.httpClient.get<User>('https://apptest-pd35.onrender.com/login?uname=12345&psw=12345');
    return users;
  }
}
