import { error } from 'util';
import { AuthService } from './auth.service';

import { Injectable } from '@angular/core';

import { Router,
        ActivatedRouteSnapshot,
        RouterStateSnapshot,
        CanActivate  } from '@angular/router';



@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService) { }


    public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
      console.log(next);
      if (this.auth.isAuthenticated()) {
        console.log('paso el guard');
        return true;

      }else {
       console.error('bloquedo por el guard');
       return false;
      }


    }
}
