import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError } from "rxjs";

import {LoginService} from "./login.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(err => {
      if ([401, 403].includes(err.status) && this.loginService.userValue) {
        this.loginService.logout();
      }
      const error = err.error?.message || err.statusText;
      console.error(err);
      return throwError(error);
    }));
  }
}
