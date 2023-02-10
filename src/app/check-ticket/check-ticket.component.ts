import { Component } from '@angular/core';
import {SkipassService} from "../skipass.service";
import {Skipass} from "../skipass";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first, Observable, Subject} from "rxjs";
import {Router} from "@angular/router";
import {LoginService} from "../login.service";
import {User} from "../user";

export interface Skigebiet {
  value: number,
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
    {value: 1, viewValue: 'Belalp Bahnen'},
    {value: 1,viewValue: 'Rosswald Bahnen'},
    {value: 1,viewValue: 'Skilifte Rothwald/Wasenalp'},
    {value: 1,viewValue: 'Aletsch Bahnen'},
    {value: 1,viewValue: 'Bellwald Sportbahnen'},
    {value: 1,viewValue: 'Bergbahnen Hohsas'},
    {value: 1,viewValue: 'Touristische Unternehmung Grächen'},
    {value: 1,viewValue: 'Torrent Bahnen Leukerbad-Albinen'},
    {value: 1,viewValue: 'Gampel-Jeizinen Bahnen'},
    {value: 1,viewValue: 'Giw / Visperterminen'},
    {value: 1,viewValue: 'Lauchernalp Bergbahnen'},
    {value: 1,viewValue: 'Moosalp Bergbahnen'},
    {value: 1,viewValue: 'Verkehrsbetriebe Unterbäch'},
    {value: 1,viewValue: 'Sportbahnen Eischoll'},
    {value: 1,viewValue: 'Skilifte Gspon'},
    {value: 1,viewValue: 'Zermatter Bergbahn'}

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
