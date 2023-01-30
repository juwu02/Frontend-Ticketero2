import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';

import { QRCodeModule } from "angular2-qrcode";


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
import { KontaktdatenComponent } from './kontaktdaten/kontaktdaten.component';
import {MatIconModule} from "@angular/material/icon";
import { ProblemmeldenComponent } from './problemmelden/problemmelden.component';
import { MatNativeDateModule } from  '@angular/material/core';
import { ImpressumComponent } from './impressum/impressum.component';
import { AgbComponent } from './agb/agb.component';

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
    HomepageComponent,
    KontaktdatenComponent,
    ProblemmeldenComponent,
    ImpressumComponent,
    AgbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    QRCodeModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatCheckboxModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
