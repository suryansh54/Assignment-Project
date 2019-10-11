import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable(
    {providedIn: 'root'}
)
export class AuthGuardService implements CanActivate{
    constructor(public router: Router){}

    canActivate(): boolean{
        if(!sessionStorage.getItem('userToken')) {
            this.router.navigate(['add-product']);
            return false;
        }
        return true;
    }
}