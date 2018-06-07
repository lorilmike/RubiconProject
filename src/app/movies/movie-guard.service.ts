import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()

export class MovieGuardService implements CanActivate {

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const id = +route.url[1].path;

        if (isNaN(id) || id < 1) {
            alert('Invalid movie Id!');
            this.router.navigate(['/movies']);
            return false;
        }
        return true;
    }
 }
