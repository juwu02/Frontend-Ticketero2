import { Injectable } from '@angular/core';
import { Skipass } from "./skipass";
import {BehaviorSubject, Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "./user";


@Injectable({
  providedIn: 'root'
})
export class SkipassService {

  API_URL = "https://apptest-pd35.onrender.com/";

  headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  constructor(private httpClient: HttpClient) {
  }

  getSkipaesse(): Observable<Skipass[]>{
    const skipaesse = this.httpClient.get<Skipass[]>(this.API_URL + 'checkTicket', {'headers': this.headers});
    //const skipaesse = of(SKIPAESSE);
  return skipaesse;
  }

  getSkipass(id): Observable<Skipass>{
    const skipass = this.httpClient.get<Skipass>(this.API_URL + 'checkTicket' + id.toString(), {'headers': this.headers});
    return skipass;
  }

}
