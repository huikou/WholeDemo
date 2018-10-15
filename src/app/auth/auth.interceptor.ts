import { HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent, HttpResponse } from "@angular/common/http";
import { Observable,  of, throwError} from "rxjs";
import { AuthService } from './auth.service';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Response } from "@angular/http";
import { catchError,tap} from 'rxjs/operators';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router, private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.headers.get('No-Auth') == "True")
            return next.handle(req.clone());

        if (localStorage.getItem('userToken') != null) {
            const clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem('userToken'))
            });
            return next.handle(clonedreq)
                .pipe(
                tap( event => {
                    if (event instanceof HttpResponse) {
                       
                      console.log(" all looks good");
                      console.log(event.status);
                    }},
                    err => {
                       console.log("---error response----");
	             	   console.error("status code:");
	          	       console.error(err.status);
	          	       console.error(err.message);
	          	       console.log("--- end of response---");
                       if (err.status === 401)
                           this.router.navigateByUrl('/login');
                    })
                );
        }
        else {
            this.router.navigateByUrl('/login');
        }
    }
}