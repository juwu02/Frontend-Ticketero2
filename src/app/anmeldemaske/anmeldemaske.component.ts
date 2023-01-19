import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { LoginService } from "../login.service";
import {User} from "../user";
import {Router} from "@angular/router";


@Component({
  selector: 'app-anmeldemaske',
  templateUrl: './anmeldemaske.component.html',
  styleUrls: ['./anmeldemaske.component.scss']
})
export class AnmeldemaskeComponent {

  loading = false;
  submitted = false;

  form = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });

  user: User;

  email: string = "";
  password: string = "";

  constructor(private loginService: LoginService, private router: Router) {
    this.loginService.user.subscribe(x => this.user = x);
      }

  submitForm() {
    if (this.form.invalid){
      return;

      /*this.loginService
        .login(this.form.get('email')?.value, this.form.get('password')?.value)
        .subscribe((response) => {
          this.router.navigate(['/accountverwaltung']);
        })*/
    }
  }

  /*onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.createUser();
  }*/

  clear(){
    this.email = "";
    this.password = "";
  }

  email1 = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email1.hasError('email') ? 'Keine echte E-Mail Adresse' : '';
  }

  hide=true;

  /*ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    this.loginService.getUsers()
      .subscribe(x => {
        console.log(x)
        this.user = x
      });*/

}
