import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BevorstehendeEventsComponent } from "./bevorstehende-events/bevorstehende-events.component";
import { AccountverwaltungComponent } from './accountverwaltung/accountverwaltung.component';
import { AnmeldemaskeComponent } from './anmeldemaske/anmeldemaske.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RegistrierungsmaskeComponent } from './registrierungsmaske/registrierungsmaske.component';
import { KontaktformularComponent } from './kontaktformular/kontaktformular.component';
import { SkipasskaufenComponent } from './skipasskaufen/skipasskaufen.component';
import { HomepageComponent } from './homepage/homepage.component';
import { KontaktdatenComponent } from './kontaktdaten/kontaktdaten.component';
import { ProblemmeldenComponent } from './problemmelden/problemmelden.component';
import {ImpressumComponent} from "./impressum/impressum.component";

const routes: Routes = [
  {path: 'tickets',
    component: BevorstehendeEventsComponent,
    title: 'Tickets'},
  {path: 'accountverwaltung',
       component: AccountverwaltungComponent,
    title: 'Accountverwaltung'
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
    title: 'Skipass kaufen'
  },
  {path: 'homepage',
       component: HomepageComponent
  },
  {path:'kontaktdaten',
      component: KontaktdatenComponent,
    title: 'Kontaktdaten'
  },
  {path:'anmelden',
    component: AnmeldemaskeComponent
  },
  {path:'problemmelden',
      component: ProblemmeldenComponent
    },
  {path: 'impressum',
    component: ImpressumComponent,
    title: 'Impressum'},
  { path: '',   redirectTo: '/homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
