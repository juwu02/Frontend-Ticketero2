import { Component, OnInit } from '@angular/core';


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
  foods: Food[] = [
      {value: '1200', viewValue: 'Erwachsene 1200€'},
      {value: '1000', viewValue: 'Jugendliche 1000€'},
      {value: '600', viewValue: 'Kinder 600€'},
      {value: '0', viewValue: 'Babys kostenlos'},
      {value: '3000', viewValue: 'Familienpass 3000€'}
    ];
}

