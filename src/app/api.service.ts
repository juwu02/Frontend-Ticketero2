import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpService: HttpClient) { }

  login(email: string, password: string, id: number) {
    return this.httpService.post('login' + id.toString(), {email, password});
  }

  register(firstname: string, lastname:string, email: string, birthday: string, phonenumber: string, password: string) {
    return this.httpService.post<User>('register', {firstname, lastname, email, birthday, phonenumber, password});
  }
}
