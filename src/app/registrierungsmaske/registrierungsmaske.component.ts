import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-registrierungsmaske',
  templateUrl: './registrierungsmaske.component.html',
  styleUrls: ['./registrierungsmaske.component.scss']
})
export class RegistrierungsmaskeComponent {

  register = new FormGroup({
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
