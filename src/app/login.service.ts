import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, map, tap} from "rxjs";

import { User } from "./user";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  API_URL = "https://apptest-pd35.onrender.com/";

  headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  constructor( private httpClient: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(email, password) {
    return this.httpClient.post<User>(this.API_URL + 'login', { email, password }, {'headers': this.headers})
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
    this.router.navigate(['accountverwaltung']);
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/homepage']);
  }

  register(user: User): Observable<User> {
    return this.httpClient.post<User>(this.API_URL + 'register', user, {'headers': this.headers}).pipe(
      tap((newUser: User) => console.log(`neuer User registriert name=$(newUser.firstName`))
    )
  }

  getById(id: string) {
    return this.httpClient.get<User>(this.API_URL + 'users' + id.toString());
  }
}
