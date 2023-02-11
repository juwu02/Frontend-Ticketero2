import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs";
import {User} from "../user";
import {LoginService} from "../login.service";
import {Router, ActivatedRoute} from "@angular/router";
import {getBoolean} from "@angular/fire/remote-config";

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
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      birthday: ['', Validators.required],
      phonenumber: ['', [Validators.required, Validators.minLength(8)]],
      agb: [true, Validators.requiredTrue]
    });
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
          this.router.navigate(['homepage']);
        },
        error: error => {
          this.loading = false;
        }
      })
  }

  firstname = new FormControl('', Validators.required);
  lastname = new FormControl('', Validators.required);
  birthday = new FormControl('', Validators.required);
  email = new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
  password = new FormControl('', [Validators.required, Validators.minLength(5)]);
  phonenumber = new FormControl('', [Validators.required, Validators.minLength(8)]);

  getErrorMessageFirstname() {
    if (this.firstname.hasError('required')) {
      return 'Vorname ist erforderlich';
    }
  }
  getErrorMessageLastname() {
    if (this.lastname.hasError('required')) {
      return 'Nachname ist erforderlich';
    }
  }
  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'E-Mail ist erforderlich';
    }
  }
  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'Passwort ist erforderlich und muss aus mindestens 5 Zeichen bestehen';
    }
  }
  getErrorMessageBirthday() {
    if (this.birthday.hasError('required')) {
      return 'Geburtsdatum ist erforderlich';
    }
  }
  getErrorMessagePhonenumber() {
    if (this.phonenumber.hasError('required')) {
      return 'Telefonnummer ist erforderlich und muss aus mindestens 8 Zeichen bestehen';
    }
  }
  getErrorMessageAgb() {

  }

  hide = true;

}
