import { Component } from '@angular/core';
import {SkipassService} from "../skipass.service";
import {Skipass} from "../skipass";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first, Observable, Subject} from "rxjs";
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
    {value: 'Zermatter Bergbahn', viewValue: 'Belalp Bahnen'},
    {value: 'Zermatter Bergbahn',viewValue: 'Rosswald Bahnen'},
    {value: 'Zermatter Bergbahn',viewValue: 'Skilifte Rothwald/Wasenalp'},
    {value: 'Zermatter Bergbahn',viewValue: 'Aletsch Bahnen'},
    {value: 'Zermatter Bergbahn',viewValue: 'Bellwald Sportbahnen'},
    {value: 'Zermatter Bergbahn',viewValue: 'Bergbahnen Hohsas'},
    {value: 'Zermatter Bergbahn',viewValue: 'Touristische Unternehmung Grächen'},
    {value:'Zermatter Bergbahn',viewValue: 'Torrent Bahnen Leukerbad-Albinen'},
    {value: 'Zermatter Bergbahn',viewValue: 'Gampel-Jeizinen Bahnen'},
    {value: 'Zermatter Bergbahn',viewValue: 'Giw / Visperterminen'},
    {value: 'Zermatter Bergbahn',viewValue: 'Lauchernalp Bergbahnen'},
    {value: 'Zermatter Bergbahn',viewValue: 'Moosalp Bergbahnen'},
    {value: 'Zermatter Bergbahn',viewValue: 'Verkehrsbetriebe Unterbäch'},
    {value: 'Zermatter Bergbahn',viewValue: 'Sportbahnen Eischoll'},
    {value: 'Zermatter Bergbahn',viewValue: 'Skilifte Gspon'},
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
