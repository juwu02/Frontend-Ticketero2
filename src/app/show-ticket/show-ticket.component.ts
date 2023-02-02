import { Component } from '@angular/core';
import {Skipass} from "../skipass";
import {SkipassService} from "../skipass.service";

@Component({
  selector: 'app-show-ticket',
  templateUrl: './show-ticket.component.html',
  styleUrls: ['./show-ticket.component.scss']
})
export class ShowTicketComponent {

skipass: Skipass;

  constructor(private skipassService: SkipassService) {
    this.skipassService.skipass.subscribe(x => this.skipass = x);
  }

}
