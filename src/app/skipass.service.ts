import { Injectable } from '@angular/core';
import { Skipass } from "./skipass";
import {BehaviorSubject, map, Observable, of, tap} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "./user";
import {LoginService} from "./login.service";


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

  getSkipaesse(serialno, place){
    return this.httpClient.post<Skipass>(this.API_URL + 'proveTicket', {serialno, place}, {'headers': this.headers})
      .pipe(map(skipass => {
        localStorage.setItem('skipass', JSON.stringify(skipass));
        this.skipassSubject.next(skipass);
        return skipass;
      }));
  }

  getTickets1(): Observable<Skipass[]>{
    const skipaesse = this.httpClient.get<Skipass[]>('http://127.0.0.1:5000/skipaesse');
    return skipaesse;
  }

  getTickets(userid): Observable<any>{
    return this.httpClient.post<any>(this.API_URL + 'mytickets', {userid}, {'headers': this.headers})
      .pipe(map(skipass => {
        localStorage.setItem('skipass', JSON.stringify(skipass));
        this.skipassSubject.next(skipass);
        return skipass;
      }));
  }

}
