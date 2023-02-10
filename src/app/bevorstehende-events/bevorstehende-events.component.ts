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

  show=1;
  skigebiet="Oberwallis";
  state='collapsed';
  panelOpenState: boolean = false;

  qrInfo ='http://localhost:4200/checkTicket';

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
    this.skipassService.getTickets2(this.user.id)
      .subscribe(x => this.skipaesse = x)
  }

  toggle(): void {
    this.state = this.state === 'collapsed' ? 'expanded' : 'collapsed';

  }

}
