import { Component } from '@angular/core';
import {FormControl, FormBuilder, Validators, FormGroup} from "@angular/forms";
import { LoginService } from "../login.service";
import {User} from "../user";
import {Router, ActivatedRoute} from "@angular/router";
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

  constructor(private loginService: LoginService, private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute) {
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
          const returnUrl = this.route.snapshot.queryParams['returnUrl']
          this.router.navigateByUrl(returnUrl);
        },
        error: error => {
          this.loading = false;
        }
      });
  }

  /* login(){
     //this.loginService
       //.login(this.form.get('email')?.value, this.form.get('password')?.value)
     this.submitted = true;

     if (this.form.invalid) {
       return;
     }

     this.loginUser();
   }

   private loginUser() {
     this.loginService.login(this.form.get('email')?.value, this.form.get('password')?.value)
       .subscribe({
         next: () => {
           console.log('User wurde erfolgreich angemeldet');
           this.router.navigateByUrl("/accountverwaltung", {skipLocationChange: true});
         }
       });
   }*/

  /*submitForm() {
      if (this.form.invalid){
        return;

        /*this.loginService
          .login(this.form.get('email')?.value, this.form.get('password')?.value)
          .subscribe((response) => {
            this.router.navigate(['/accountverwaltung']);
          })*/
  // }
  //}

  /*onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.createUser();
  }*/

  /*clear(){
    this.email = "";
    this.password = "";
  }*/

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
