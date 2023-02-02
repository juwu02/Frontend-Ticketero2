import { Injectable } from '@angular/core';
import { Skipass } from "./skipass";
import {BehaviorSubject, map, Observable, of, tap} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "./user";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class SkipassService {

  //public skipass: Observable<Skipass>;
  private skipassSubject: BehaviorSubject<Skipass>;
  public skipass: Observable<Skipass>;

  API_URL = "https://apptest-pd35.onrender.com/";

  headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  constructor(private httpClient: HttpClient, private router: Router) {
    this.skipassSubject = new BehaviorSubject<Skipass>(JSON.parse(localStorage.getItem('skipass')));
    this.skipass = this.skipassSubject.asObservable();
  }

  getSkipaesse(serialno){
    return this.httpClient.post<Skipass>(this.API_URL + 'proveTicket', {serialno}, {'headers': this.headers})
      .pipe(map(skipass => {
        localStorage.setItem('skipass', JSON.stringify(skipass));
        this.skipassSubject.next(skipass);
        return skipass;
      }));
    this.router.navigate(['showTicket']);
  }

  /*getSkipass(id): Observable<Skipass>{
    const skipass = this.httpClient.get<Skipass>(this.API_URL + 'checkTicket' + id.toString(), {'headers': this.headers});
    return skipass;
  }*/

  /*searchSkipass(term: string): Observable<Skipass> {
    if (!term.trim()) {
      return of();
    }
    return this.httpClient.get<Skipass>(`${this.API_URL}/?serialnumber=${term}`)
  }*/

  getSkipass(serial_no: number): Observable<Skipass> {
    const url = "https://apptest-pd35.onrender.com/proveTicket";
    return this.httpClient.get<Skipass>(`${url}/${serial_no}`);
  }

}
