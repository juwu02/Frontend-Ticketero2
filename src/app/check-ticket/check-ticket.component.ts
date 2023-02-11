import { Component } from '@angular/core';
import {SkipassService} from "../skipass.service";
import {Skipass} from "../skipass";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs";
import {Router} from "@angular/router";
import {LoginService} from "../login.service";
import {User} from "../user";

export interface Skigebiet {
  value: string,
  viewValue: string;
}

@Component({
  selector: 'app-check-ticket',
  templateUrl: './check-ticket.component.html',
  styleUrls: ['./check-ticket.component.scss']
})

export class CheckTicketComponent {

  form: FormGroup
  loading = false;
  submitted = false;
  skipass: Skipass;
  skipaesse: Skipass[] = [];
  user: User;

  serialno: any;

  constructor(private skipassService: SkipassService, private loginService: LoginService, private formBuilder: FormBuilder, private router: Router) {
    this.skipassService.skipass.subscribe(x => this.skipass = x);
    this.loginService.user.subscribe(x => this.user = x);
  }

  skigebiete: Skigebiet[] = [
    {value: 'Belalp Bahnen', viewValue: 'Belalp Bahnen'},
    {value: 'Rosswald Bahnen',viewValue: 'Rosswald Bahnen'},
    {value: 'Skilifte Rothwald/Wasenalp',viewValue: 'Skilifte Rothwald/Wasenalp'},
    {value: 'Aletsch Bahnen',viewValue: 'Aletsch Bahnen'},
    {value: 'Bellwald Sportbahnen',viewValue: 'Bellwald Sportbahnen'},
    {value: 'Bergbahnen Hohsas',viewValue: 'Bergbahnen Hohsas'},
    {value: 'Touristische Unternehmung Grächen',viewValue: 'Touristische Unternehmung Grächen'},
    {value:'Torrent Bahnen Leukerbad-Albinen',viewValue: 'Torrent Bahnen Leukerbad-Albinen'},
    {value: 'Gampel-Jeizinen Bahnen',viewValue: 'Gampel-Jeizinen Bahnen'},
    {value: 'Giw / Visperterminen',viewValue: 'Giw / Visperterminen'},
    {value: 'Lauchernalp Bergbahnen',viewValue: 'Lauchernalp Bergbahnen'},
    {value: 'Moosalp Bergbahnen',viewValue: 'Moosalp Bergbahnen'},
    {value: 'Verkehrsbetriebe Unterbäch',viewValue: 'Verkehrsbetriebe Unterbäch'},
    {value: 'Sportbahnen Eischoll',viewValue: 'Sportbahnen Eischoll'},
    {value: 'Skilifte Gspon',viewValue: 'Skilifte Gspon'},
    {value: 'Zermatter Bergbahn',viewValue: 'Zermatter Bergbahn'}

  ];

  ngOnInit() {
    this.form = this.formBuilder.group({
      search: ['', Validators.required],
      place: ['', Validators.required]
    });
    this.getSkipaesse();
  }

  get f() {
    return this.form.controls;
  }

  getSkipaesse(){
    this.skipassService.getTickets2(this.user.id)
      .subscribe(x => this.skipaesse = x)
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.skipassService.getSkipaesse(this.f['search'].value, this.f['place'].value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['showTicket']);
        }
      });
  }

}
