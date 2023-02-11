import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {FormGroup, FormsModule, FormBuilder, Validators} from "@angular/forms";
import {SkipassService} from "../skipass.service";
import {LoginService} from "../login.service";
import {User} from "../user";
import {first} from "rxjs";
import {Router} from "@angular/router";
import {Skipass} from "../skipass";

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-skipasskaufen',
  templateUrl: './skipasskaufen.component.html',
  styleUrls: ['./skipasskaufen.component.scss']
})
export class SkipasskaufenComponent{

  form: FormGroup;
  loading = false;
  submitted = false;
  user: User;
  skipass: Skipass;

  constructor(private http:HttpClient, private loginService: LoginService, private skipassService: SkipassService, private formBuilder: FormBuilder, private router: Router){
    this.loginService.user.subscribe(x => this.user = x);
  }

    /*onSubmit(data){
      this.http.post('https://apptest-pd35.onrender.com/buy', data)
      .subscribe((result)=>{
        console.warn("result", result)
      })
    console.warn(data);
  }*/

  foods: Food[] = [
    {value: '0', viewValue: 'Erwachsene 1200€'},
    {value: '1', viewValue: 'Jugendliche 1000€'},
    {value: '2', viewValue: 'Kinder 600€'},
    {value: '3', viewValue: 'Babys kostenlos'},
    {value: '4', viewValue: 'Familienpass 3000€'}
  ];

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subtype: ['', Validators.required],
      birthday: ['', Validators.required],
      age: ['', Validators.required],
      phonenumber: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    this.submitted = true;

    this.loading = true;
    this.skipassService.buy(this.form.value, this.user.id)
      .subscribe({
        next: () => {
          this.router.navigate(['bestaetigung']);
        }
      });
  }


}


