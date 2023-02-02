import { Injectable } from '@angular/core';
import { Skipass } from "./skipass";
import {BehaviorSubject, Observable, of, tap} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "./user";


@Injectable({
  providedIn: 'root'
})
export class SkipassService {

  public skipass: Observable<Skipass>;

  API_URL = "https://apptest-pd35.onrender.com/";

  headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  constructor(private httpClient: HttpClient) {
  }

  getSkipaesse(): Observable<Skipass>{
    return this.httpClient.get<Skipass>(this.API_URL + 'allTickets', {'headers': this.headers})
      /*.pipe(
        tap(_ => this.log('fuktioniert'));
      );*/
  }

  getSkipass(id): Observable<Skipass>{
    const skipass = this.httpClient.get<Skipass>(this.API_URL + 'checkTicket' + id.toString(), {'headers': this.headers});
    return skipass;
  }

}
