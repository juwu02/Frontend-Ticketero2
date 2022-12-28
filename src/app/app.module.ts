import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BevorstehendeEventsComponent } from './bevorstehende-events/bevorstehende-events.component';
import { AccountverwaltungComponent } from './accountverwaltung/accountverwaltung.component';
import { AnmeldemaskeComponent } from './anmeldemaske/anmeldemaske.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RegistrierungsmaskeComponent } from './registrierungsmaske/registrierungsmaske.component';
import { KontaktformularComponent } from './kontaktformular/kontaktformular.component';
import { SkipasskaufenComponent } from './skipasskaufen/skipasskaufen.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    BevorstehendeEventsComponent,
    AccountverwaltungComponent,
    AnmeldemaskeComponent,
    FooterComponent,
    HeaderComponent,
    RegistrierungsmaskeComponent,
    KontaktformularComponent,
    SkipasskaufenComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
