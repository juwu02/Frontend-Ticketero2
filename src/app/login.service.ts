import { Injectable } from '@angular/core';
import { User } from "./user";
import {BehaviorSubject, Observable, of, tap} from "rxjs";
import { HttpClient } from '@angular/common/http';
import { ApiService } from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private apiService: ApiService) {
    const token = localStorage.getItem('ticketero_auth');
    this._isLoggedIn$.next(!!token);
  }

  login(email: string, password: string) {
    return this.apiService.login(email, password).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem('ticketero_auth', response.token);
      })
    )
  }


  /*getUsers(): Observable<User> {
    const users = this.httpClient.get<User>('https://apptest-pd35.onrender.com/login?uname=12345&psw=12345');
    return users;
  }   */
}
