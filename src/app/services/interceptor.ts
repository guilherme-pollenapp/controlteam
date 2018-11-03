import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

import { map, tap, retry } from "rxjs/operators";
import { Router } from "@angular/router";
import { log } from "util";

@Injectable({ providedIn: 'root' })

export class Interceptor implements HttpInterceptor {
    constructor(private router: Router) {

    }

    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {

        const idToken = sessionStorage.getItem("id_token");

        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set("x-access-token", idToken)
            });

            return next.handle(cloned).pipe(
                tap(event => {
                    if (event instanceof HttpResponse) {

                    }
                }, err => {
                    if (err instanceof HttpResponse) {
                        if (err.status == 401) {
                            this.router.navigate(['/']);
                        }
                    }
                })
            )
        }
        else {
            return next.handle(req).pipe(
                tap(event => {
                    if (event instanceof HttpResponse) {

                    }
                }, err => {
                    if (err.status == 401) {
                        this.router.navigate(['/']);
                    }
                })
            );
        }
    }
}