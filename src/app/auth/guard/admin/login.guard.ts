import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../../authservice/service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private _auth: ServiceService,
    private _routes: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const admin_token = sessionStorage.getItem("admin-token")
    const superadmin_token = sessionStorage.getItem("superadmin-token")
    const client_token = sessionStorage.getItem("client-token")
    const user_token = sessionStorage.getItem("user-token")

    if (admin_token || superadmin_token || client_token || user_token) {
      return true;
    } else {
      return false;
    }

  }
}
