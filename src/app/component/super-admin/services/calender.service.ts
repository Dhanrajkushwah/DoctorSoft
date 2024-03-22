import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, tap ,map  } from 'rxjs';
import {
    startOfDay,
    endOfDay,
    subDays,
    addDays,
    endOfMonth,
    isSameDay,
    isSameMonth,
    addHours,
  } from 'date-fns';
@Injectable({
  providedIn: 'root'
})
export class CalenderService {

   ApiData$ = new BehaviorSubject([])
  constructor(
    private _http: HttpClient
  ) { }
  getCalender() {
   return  this._http.get<any>(environment._api + "/api/session/calender").pipe(map((res)=>{
        
      res.map((e: any) => ({ 
        title: e.title,
        start: subDays(startOfDay(new Date(e.start)), 0),
        allDay: true,
        
        }))

        return res
     }))
     
     
     
     
    //  .subscribe(res=>
        //   res.forEach((e: any) => ({ 
        //             title: e.title,
        //             start: subDays(startOfDay(new Date(e.start)), 0),
        //             allDay: true,
                    
        //           }))
                 
        // )
    
    
  }
}