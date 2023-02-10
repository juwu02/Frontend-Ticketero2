import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-skipasskaufen',
  templateUrl: './skipasskaufen.component.html',
  styleUrls: ['./skipasskaufen.component.scss']
})
export class SkipasskaufenComponent{
  constructor(private http:HttpClient){}

    onSubmit(data){
      this.http.post('https://apptest-pd35.onrender.com/buy', data)
      .subscribe((result)=>{
        console.warn("result", result)
      })
    console.warn(data);
  }

  foods: Food[] = [
      {value: '0', viewValue: 'Erwachsene 1200€'},
      {value: '1', viewValue: 'Jugendliche 1000€'},
      {value: '2', viewValue: 'Kinder 600€'},
      {value: '3', viewValue: 'Babys kostenlos'},
      {value: '4', viewValue: 'Familienpass 3000€'}
    ];


}


