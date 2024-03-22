import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(
    private _http: HttpClient
  ) { }

  addClient(obj: any) {
    return this._http.post<any>(environment._api + "/api/admin/createclient", obj)
  }
  getclient() {
    return this._http.get<any>(environment._api + "/api/admin/client")
  }

  editClient(id: string, data: any) {
    return this._http.put<any>(environment._api + "/api/admin/client/" + id, data)
  }

  deleteClient(id: string) {
    return this._http.delete<any>(`${environment._api}/api/admin/client/${id}`)
  }

  resetpass(id: any, data: any) {
    return this._http.put<any>(environment._api + "/api/admin/clientpassword/" + id, data)
  }
}
