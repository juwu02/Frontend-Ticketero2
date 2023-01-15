import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {Skipass} from "../skipass";
import { SkipassService } from "../skipass.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-bevorstehende-events',
  templateUrl: './bevorstehende-events.component.html',
  styleUrls: ['./bevorstehende-events.component.scss'],
  animations: [
    trigger('bodyExpansion', [
      state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed, void => collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})

export class BevorstehendeEventsComponent {
  //Array abrufen für get
  //skipaesse: Skipass[] = [];
  //selectedSkipass?: Skipass;
  //löschen wenn Backend da is
  skipaesse = [
    {id: 1, skigebiet:'Oberwallis', datum:'26.12.2022', bestellnummer:'#12345', vorname:'Max', nachname:'Mustermann', tarif:'ganze Saison'},
    {id: 2, skigebiet:'anderes Skigebiet', datum:'26.12.2022', bestellnummer:'#12345', vorname:'Maxim', nachname:'Mustermann', tarif:'ganze Saison'},
    {id: 2, skigebiet:'anderes Skigebiet', datum:'26.12.2022', bestellnummer:'#12345', vorname:'Maxim', nachname:'Mustermann', tarif:'ganze Saison'},
    {id: 2, skigebiet:'anderes Skigebiet', datum:'26.12.2022', bestellnummer:'#12345', vorname:'Maxim', nachname:'Mustermann', tarif:'ganze Saison'}
  ]
  //für Backend
  //skipass? : Skipass;
  //skipass: ({ vorname: 'Max'; nachname: 'Mustermann'; id: 1 } | { vorname: 'Maxim'; nachname: 'Mustermann'; id: 2 } | { vorname: 'Maxima'; nachname: 'Mustermann'; id: 3 } | { vorname: 'Maxi'; nachname: 'Mustermann'; id: 4 })

  constructor(private skipassService: SkipassService) {
  }

  //für Backend
  /*ngOnInit(): void {
    this.getSkipaesse();
  }*/

//für Backend
 /* getSkipaesse(): void{
    this.skipassService.getSkipaesse()
      .subscribe(x => {
        console.log(x)
        this.skipaesse = x
      });
  }*/

  show=1;
  skigebiet="Oberwallis";
  zusatzText="Das ist ein Test Skipass";
  state='collapsed';
  panelOpenState: boolean = false;
  toggle(): void {
    this.state = this.state === 'collapsed' ? 'expanded' : 'collapsed';

  }

  qrInfo = JSON.stringify(this.skipaesse)
//für Backend

  /*save(): void{
    if(this.skipass){
    this.skipassService.updateSkipass(this.skipass).subscribe();}
  }

  onSelected(skipass: Skipass): void{
    this.selectedSkipass = skipass;
  }*/



}
