import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {

  constructor(
    private _http:HttpClient,
  ) { }

  addCoupons(data: any){
    return this._http.post<any>(environment._api+"/api/coupon",data)
   }
   getCoupons(){
    return this._http.get<any>(environment._api+"/api/coupon")
   }
   deleteCoupons(id:any){
    return this._http.delete<any>(environment._api+"/api/coupon/"+id)
   }
}
