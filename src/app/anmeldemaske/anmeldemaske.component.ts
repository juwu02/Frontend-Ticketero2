import { Component } from '@angular/core';
import {FormControl, FormBuilder, Validators, FormGroup} from "@angular/forms";
import { LoginService } from "../login.service";
import {User} from "../user";
import {Router} from "@angular/router";
import {first} from "rxjs";

@Component({
  selector: 'app-anmeldemaske',
  templateUrl: './anmeldemaske.component.html',
  styleUrls: ['./anmeldemaske.component.scss']
})
export class AnmeldemaskeComponent {

  form: FormGroup;
  loading = false;
  submitted = false;
  user: User;

  constructor(private loginService: LoginService, private router: Router, private formBuilder: FormBuilder) {
    this.loginService.user.subscribe(x => this.user = x);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
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
    this.loginService.login(this.f['email'].value, this.f['password'].value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['accountverwaltung']);
        },
        error: error => {
          this.loading = false;
        }
      });
  }

  email = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Bitte füllen Sie das Feld aus';
    }
    if (this.password.hasError('required')) {
      return 'Bitte füllen Sie das Feld aus';
    }
  }

  hide=true;

}
