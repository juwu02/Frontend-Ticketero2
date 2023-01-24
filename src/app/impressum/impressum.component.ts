import { Component } from '@angular/core';

export interface Section {
  name: string;
  beschreibung: string;
}

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent {
  folders: Section[] = [
    {
      name: 'Besitzer der Website:',
      beschreibung: 'Ticketero',
    },
    {
      name: 'Adresse',
      beschreibung:'Musterstraße 2, 12345 Musterstadt',
    },
    {
      name: 'Telefonnummer',
      beschreibung:'0123456789',
    },
    {
      name: 'gesetzlicher Vertreter',
      beschreibung:'Max Mustermann',
    },
    {
      name: 'Steueridentifikationsnummer',
      beschreibung:'0123456789',
    },
  ];
  notes: Section[] = [
    {
      name: 'Es werden nur die für uns relevanten Daten gesammelt',
      beschreibung:'Daten die für den Ticketkauf und dessen validieren notwendig sind',
    },
    {
      name: 'Third Parties Anbieter',
      beschreibung:'Wir arbeiten nicht mit Third Parties Anbieter zusammen',
    },
    {
      name: 'Daten löschen',
      beschreibung:'Sie können alle Daten, die wir über sie haben, löschen lasssen',
    },
  ];

}
