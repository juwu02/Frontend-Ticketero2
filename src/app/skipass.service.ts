import { Injectable } from '@angular/core';
import { Skipass } from "./skipass";
import { Observable, of } from "rxjs";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SkipassService {

  constructor(private httpClient: HttpClient) { }

  getSkipaesse(): Observable<Skipass[]>{
    const skipaesse = this.httpClient.get<Skipass[]>('http://127.0.0.1:5000/my-tickets');
    //const skipaesse = of(SKIPAESSE);
  return skipaesse;
  }

  updateSkipass(skipass: Skipass): Observable<Skipass> {
    return this.httpClient.post<Skipass>('http://127.0.0.1:5000/update', skipass)
  }

  /*getSkipaesse(): Observable<Skipass[]>{
    const skipaesse = this.httpClient.get<Skipass[]>('http://127.0.0.1:5000/skipaesse');
    return skipaesse;
  }*/
}