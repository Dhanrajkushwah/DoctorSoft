import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotShowLoginPageGuard implements CanActivate {
  constructor(
    private _Routes: Router

  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const admin_token = sessionStorage.getItem("admin-token")
    const superadmin_token = sessionStorage.getItem("superadmin-token")
    const client_token = sessionStorage.getItem("client-token")
    const user_token = sessionStorage.getItem("user-token")
    if (admin_token || superadmin_token || client_token || user_token) {

      if (admin_token) {
        this._Routes.navigateByUrl('/admin', { replaceUrl: true })
        return false
      }
      else if (superadmin_token){
        this._Routes.navigateByUrl('/superadmin', { replaceUrl: true })
        return false
      }
      else if (client_token){
        this._Routes.navigateByUrl('/client', { replaceUrl: true })
        return false
      }
      else if (user_token){
        this._Routes.navigateByUrl('/user', { replaceUrl: true })
        return false
      }
      else{
        return false
      }
    } 
    else {
      return true
    }

  }

}
