import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';

import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  public routes = routes;
  addUserForm !: FormGroup;
  ckForm = false;
constructor(
  private _fb : FormBuilder
){}

ngOnInit(): void {
  this.addUserForm = this._fb.group({
    username : [null,Validators.required],
    email : [null,Validators.required],
    password : [null,Validators.required]
  });
}
onSubmit(): void{
  if ( this.addUserForm.invalid) {
      this.ckForm = true;
      return
  }

  console.log(this.addUserForm.value)

}
   

 
}
