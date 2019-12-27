import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class RouteGuardService implements CanActivate, CanLoad {
     
    constructor(private _cookieService: CookieService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this._cookieService.get('tokenId')) {
            return true;
            
        } else {
            return false;
        }
    }
 
    canLoad(route: Route): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
        if (this._cookieService.get('tokenId')) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }

        //throw new Error("Method not implemented.");
    }
 
     
}