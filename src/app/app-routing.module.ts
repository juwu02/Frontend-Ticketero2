import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BevorstehendeEventsComponent } from "./bevorstehende-events/bevorstehende-events.component";
import { AccountverwaltungComponent } from './accountverwaltung/accountverwaltung.component';
import { AnmeldemaskeComponent } from './anmeldemaske/anmeldemaske.component';
import { RegistrierungsmaskeComponent } from './registrierungsmaske/registrierungsmaske.component';
import { KontaktformularComponent } from './kontaktformular/kontaktformular.component';
import { SkipasskaufenComponent } from './skipasskaufen/skipasskaufen.component';
import { HomepageComponent } from './homepage/homepage.component';
import { KontaktdatenComponent } from './kontaktdaten/kontaktdaten.component';
import { ProblemmeldenComponent } from './problemmelden/problemmelden.component';
import {ImpressumComponent} from "./impressum/impressum.component";
import {AuthGuard} from "./auth.guard";
import {AgbComponent } from "./agb/agb.component";
import { CheckTicketComponent } from './check-ticket/check-ticket.component';
import { ShowTicketComponent } from "./show-ticket/show-ticket.component";
import { BestaetigungComponent } from './bestaetigung/bestaetigung.component';

const routes: Routes = [
  {path: 'tickets',
    component: BevorstehendeEventsComponent,
    title: 'Tickets',
    canActivate:[AuthGuard]},
  {path: 'accountverwaltung',
       component: AccountverwaltungComponent,
    title: 'Accountverwaltung',
    canActivate:[AuthGuard]
  },
  {path: 'registrieren',
       component: RegistrierungsmaskeComponent,
    title: 'Registrieren'
  },
  {path: 'kontaktformular',
       component: KontaktformularComponent,
    title: 'Kontaktformular'
  },
  {path: 'skipasskaufen',
       component: SkipasskaufenComponent,
    title: 'Skipass kaufen',
    canActivate:[AuthGuard]
  },
  {path: 'bestaetigung',
       component: BestaetigungComponent,
    title: 'Ticket gekauft',
    canActivate:[AuthGuard]
  },
  {path: 'homepage',
       component: HomepageComponent
  },
  {path:'kontaktdaten',
      component: KontaktdatenComponent,
    title: 'Kontaktdaten',
    canActivate:[AuthGuard]
  },
  {path:'anmelden',
    component: AnmeldemaskeComponent,
    title: 'Anmelden'
  },
  {path:'problemmelden',
      component: ProblemmeldenComponent
    },
  {path: 'impressum',
    component: ImpressumComponent,
    title: 'Impressum'},
  {path: 'agb',
    component: AgbComponent,
    title: 'AGB'},
  {path: 'checkTicket/:serialno',
    component: CheckTicketComponent,
    title: 'checkticket',
    canActivate:[AuthGuard],
    },
  {path: 'showTicket',
    component: ShowTicketComponent,
    title: 'showticket',
  canActivate:[AuthGuard]
  },
  { path: '',   redirectTo: '/homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
