import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/component/super-admin/services/company.service';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  Alluser:any = []
  constructor(private router : Router,private _user : CompanyService,private _alert: SweetalertService){

  }
  ngOnInit(){
  this.GetAllUser();
  // document.addEventListener("contextmenu",function(e){
  //   e.preventDefault()
  // },false)
  }


  GetAllUser(){
		this._user.GetUser().subscribe({
		  next: (res) =>{
			this.Alluser = res ;
		   console.log("Data get sucessfully",this.Alluser)
		  },
		  error: (err) =>{
			
			console.log('err in get Ladger Account', err)
		  },
		})
	   }

  openUser() {
    this.router.navigate(["admin/user/add-user"])
  }
  
  editUser(data: any) {	
		this.router.navigate(["admin/user/add-user"],
		{     
		  queryParams: { data: btoa(unescape(encodeURIComponent(JSON.stringify(data)))) }
		});
	}
  resetPass(data: any) {	
		this.router.navigate(["admin/user/reset-password"],
		{
		  queryParams: { data: btoa(unescape(encodeURIComponent(JSON.stringify(data)))) }
		});
	}
//   deleteUser(id: any) {
// 		this._user.deleteUser(id).subscribe((data: any) => {
// 		  if (data) {
// 			console.log('Data Deleted:-', data);
// 		  }
// 		  else {
// 			console.log("Something went wrong");
// 		  }
// 		}, (error: HttpErrorResponse) => {
// 		  console.log("Something went wrong", error);
// 		})
// 	  }
	  deleteUser(id: any): void {
		this._alert.deleteBtn().then((val) => {
		  console.log(val);
		  if (val.isConfirmed==true) {
			this._user.deleteUser(id).subscribe( {
			  next: (data) => {
				const index = this.Alluser.findIndex((Alluser: { _id: any; }) => Alluser._id === id);
				if (index !== -1) {
				  this.Alluser.splice(index, 1);
				}
  
				console.log('Client deleted successfully');
			  },
			  error: (err) => {
				console.log('Error deleting client', err);
			  },
			});
		  } 
		});
	  }
}
