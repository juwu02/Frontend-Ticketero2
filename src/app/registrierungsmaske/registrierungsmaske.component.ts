import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs";
import {User} from "../user";
import {LoginService} from "../login.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-registrierungsmaske',
  templateUrl: './registrierungsmaske.component.html',
  styleUrls: ['./registrierungsmaske.component.scss']
})
export class RegistrierungsmaskeComponent {

  form: FormGroup;
  loading = false;
  submitted = false;

  user: User;

  constructor(private route: ActivatedRoute, private loginService: LoginService, private router: Router, private formBuilder: FormBuilder) {
    this.loginService.user.subscribe(x => this.user = x);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]],
      birthday: ['', Validators.required],
      phonenumber: ['', [Validators.required, Validators.minLength(8)]],
      agb: ['', Validators.required]
    })
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.loginService.register(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['accountverwaltung'], { relativeTo: this.route});
        },
      })
  }

  /*register() {
    this.createUser();
    }

  /*submit() {
    console.log("Der User " + this.firstName + " " + this.lastName + " wurde registriert")
    this.clear();
  }*/

 /* private createUser() {
    this.loginService.register(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          console.log('User wurde erfolgreich hinzugefügt');
          this.router.navigateByUrl("/homepage", { skipLocationChange: true });
        },
      });
  }

  /*clear(){
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.password = "";
  }*/

  //email1 = new FormControl('', [Validators.required, Validators.email]);

  /*getErrorMessage() {
    return this.email1.hasError('email') ? 'Keine echte E-Mail Adresse' : '';
  }*/

  hide = true;

}
