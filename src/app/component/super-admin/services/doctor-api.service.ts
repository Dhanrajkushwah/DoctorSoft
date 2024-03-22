import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DoctorApiService {
  constructor(
    private _http: HttpClient
  ) { }

////////////////////////// add dostor ///////////////////


adddoctorssss(data: any) {
  return this._http.post<any>(environment._api + "/api/doctor", data)
}
getdoctorssssss() {
  return this._http.get<any>(environment._api + "/api/doctor")
}
editdoctor(id: any, data: any) {
  return this._http.put<any>(environment._api + "/api/doctor/" + id, data)
}




}
