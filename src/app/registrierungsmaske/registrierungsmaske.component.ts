import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-registrierungsmaske',
  templateUrl: './registrierungsmaske.component.html',
  styleUrls: ['./registrierungsmaske.component.scss']
})
export class RegistrierungsmaskeComponent {

  firstName: string = "";
  lastName: string = "";
  email: string = "";
  password: string = "";

  submit() {
    console.log("Der User " + this.firstName + " " + this.lastName + " wurde registriert")
    this.clear();
  }

  clear(){
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.password = "";
  }

  email1 = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email1.hasError('email') ? 'Keine echte E-Mail Adresse' : '';
  }

  hide = true;

}
