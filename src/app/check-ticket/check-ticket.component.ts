import { Component } from '@angular/core';
import {SkipassService} from "../skipass.service";
import {Skipass} from "../skipass";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first, Observable, Subject} from "rxjs";
import {Router} from "@angular/router";

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

  constructor(private skipassService: SkipassService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      search: ['', Validators.required]
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
    this.skipassService.getSkipaesse(this.f['search'].value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['showTicket']);
        },
        error: error => {
          this.loading = false;
        }
      });
  }

}
