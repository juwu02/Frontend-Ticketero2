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
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      birthday: ['', Validators.required],
      phonenumber: ['', [Validators.required, Validators.minLength(8)]],
      agb: ['', Validators.required]
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
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(5)]);
  phonenumber = new FormControl('', [Validators.required, Validators.minLength(8)]);

  getErrorMessage() {
    if (this.firstname.hasError('required')) {
      return 'Bitte füllen Sie das Feld aus';
    }
    if (this.lastname.hasError('required')) {
      return 'Bitte füllen Sie das Feld aus';
    }
    if (this.email.hasError('required')) {
      return 'Bitte füllen Sie das Feld aus';
    }
    if (this.password.hasError('required')) {
      return 'Bitte füllen Sie das Feld aus';
    }
    if (this.birthday.hasError('required')) {
      return 'Bitte füllen Sie das Feld aus';
    }
    if (this.phonenumber.hasError('required')) {
      return 'Bitte füllen Sie das Feld aus';
    }
  }

  hide = true;

}
