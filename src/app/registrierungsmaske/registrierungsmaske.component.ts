import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-registrierungsmaske',
  templateUrl: './registrierungsmaske.component.html',
  styleUrls: ['./registrierungsmaske.component.scss']
})
export class RegistrierungsmaskeComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
 /* registerForm = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  register() {
    this.name
  }*/



  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Du musst etwas eingeben';
    }

    return this.email.hasError('email') ? 'Keine echte E-Mail Adresse' : '';
  }

  hide = true;

  /*register = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  })
  hide=true;


  /*getErrorMessage() {
    return this.email.hasError('required') ? 'Bitte gebe etwas ein' :
      this.email.hasError('email') ? 'Keine gültige E-Mail Adresse' :
        '';
  }*/

}
