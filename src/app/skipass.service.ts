import { Injectable } from '@angular/core';
import { Skipass } from "./skipass";
import {BehaviorSubject, map, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "./user";
@Injectable({
  providedIn: 'root'
})
export class SkipassService {

  private skipassSubject: BehaviorSubject<Skipass>;
  public skipass: Observable<Skipass>;

  user: User;
  skipaesse: Skipass[] = [];

  API_URL = "https://apptest-pd35.onrender.com/";

  headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  constructor(private httpClient: HttpClient) {
    this.skipassSubject = new BehaviorSubject<Skipass>(JSON.parse(localStorage.getItem('skipass')));
    this.skipass = this.skipassSubject.asObservable();
  }
  getSkipaesse(serialno, location){
    return this.httpClient.post<Skipass>(this.API_URL + 'checkticket', {serialno, location}, {'headers': this.headers})
      .pipe(map(skipass => {
        localStorage.setItem('skipass', JSON.stringify(skipass));
        this.skipassSubject.next(skipass);
        return skipass;
      }));
  }

  getTickets2(userid):Observable<Skipass[]>{
    return this.httpClient.post<Skipass[]>(this.API_URL + 'mytickets', {userid}, {'headers': this.headers});
  }

  buy(skipass: Skipass, userid): Observable<Skipass>{
    return this.httpClient.post<Skipass>(this.API_URL + '/buy', {skipass, userid}, {'headers': this.headers})
      .pipe(map(skipass => {
        localStorage.setItem('skipass', JSON.stringify(skipass));
        this.skipassSubject.next(skipass);
        return skipass;
      }));
  }

}
