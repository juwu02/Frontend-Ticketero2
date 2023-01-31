import { Component } from '@angular/core';
import {SkipassService} from "../skipass.service";
import {Skipass} from "../skipass";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-check-ticket',
  templateUrl: './check-ticket.component.html',
  styleUrls: ['./check-ticket.component.scss']
})
export class CheckTicketComponent {

  form: FormGroup
  loading = false;
  submitted = false;
  skipass: Skipass;

  constructor(private skipassService: SkipassService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      search: ['', Validators.required]
    });
  }

  get f() {
    return this.form.controls
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.skipassService.getSkipass(this.f['search']);
  }

}