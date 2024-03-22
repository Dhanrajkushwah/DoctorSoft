import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CustomPageService {

  constructor(private _http : HttpClient,private snackBar:MatSnackBar) { }

  getCustomPage(){
    return this._http.get<any>(environment._api+"/api/landingpage/custompagelist")
  }
  
  updateCustomPage(id:any, obj:any){
    let URL = `${environment._api+"/api/landingpage/custompagelist/"}${id}`;
    return this._http.put<any>(URL,obj)
  }
 
  openSnackBar(data:any) {
    this.snackBar.open(data, 'Ok' ,{
      duration: 1500,
    });
  }


}
export class PizzaPartyComponent {}