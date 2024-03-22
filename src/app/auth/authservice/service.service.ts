import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  admin_token: any;
  constructor(private http: HttpClient,
    private _Rout: Router
  ) { this.admin_token = sessionStorage.getItem("admin-token") }

  login(obj: any) {
    return this.http.post(environment._api + "/api/login", obj)
  }

  cklogin_to_Admin() {
    return this.admin_token ? true : (this._Rout.navigate(['/sign-in']), false);
  }

  // Get Admin Profile //
  GetProfile(id: any) {
    return this.http.get<any>(environment._api + "/api/profile/" + id)
  }
}
