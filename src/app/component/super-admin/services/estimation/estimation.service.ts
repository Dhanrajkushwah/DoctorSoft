import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EstimationService {

  constructor(private _http:HttpClient) { }

  addEstimation(obj:any){
    return this._http.post<any>(environment._api+"/api/estimation",obj)
  }
  getEstimation(){
    return this._http.get<any>(environment._api+"/api/estimation")
  }

  getEstimationById(id:any){
    let URL = `${environment._api+"/api/estimation"}/${id}`
    return this._http.get<any>(URL)
  }
  deleteEstimation(id:any){
    let URL = `${environment._api+"/api/estimation"}/${id}`
    return this._http.delete<any>(URL)
  }
  updateEstimation(obj:any, id:any){
  let URL = `${environment._api+"/api/estimation"}/${id}`
  return this._http.put<any>(URL,obj)
  }
}
