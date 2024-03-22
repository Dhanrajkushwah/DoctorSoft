import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private _http:HttpClient) { }

  addExpense(obj:any){
  return this._http.post<any>(environment._api+"/api/expenses",obj)
  }
  getExpense(){
    return this._http.get<any>(environment._api+"/api/expenses")
    }
  getExpenseById(id:any){
  let url =`${environment._api+"/api/expenses"}/${id}`
  return this._http.get<any>(url)
  }
  updateExpense(id:any, obj:any){
    let url =`${environment._api+"/api/expenses"}/${id}`
    return this._http.put<any>(url,obj)
    }
    deleteExpense(id:any){
      let url =`${environment._api+"/api/expenses"}/${id}`
      return this._http.delete<any>(url)
      }
}
