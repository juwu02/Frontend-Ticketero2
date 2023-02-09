import {Component, Pipe} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {Skipass} from "../skipass";
import { SkipassService } from "../skipass.service";
import {LoginService} from "../login.service";
import {User} from "../user";

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
  skipass: Skipass;
  skipaesse: Skipass[] = [];
  user: User;

  constructor(private skipassService: SkipassService, private loginService: LoginService) {
    this.loginService.user.subscribe(x => this.user = x);
  }

  ngOnInit() {
    this.getSkipaesse();
  }

  getSkipaesse(){
    this.skipassService.getTickets1()
      .subscribe(x => this.skipaesse = x)
  }

  /*ngOnInit() {

     this.getSkipaesse();
   }

   getSkipaesse(): void{
     this.skipassService.getTickets(this.user.id)
       .subscribe(x => {
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
  qrInfo ='http://localhost:4200/checkTicket';

}
