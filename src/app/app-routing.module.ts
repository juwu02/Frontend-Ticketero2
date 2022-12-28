import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BevorstehendeEventsComponent } from "./bevorstehende-events/bevorstehende-events.component";

const routes: Routes = [
  {path: 'bevorstehendeEvents',
    component: BevorstehendeEventsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
