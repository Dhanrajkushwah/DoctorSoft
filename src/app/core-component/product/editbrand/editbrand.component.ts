import { Component } from '@angular/core';

@Component({
  selector: 'app-editbrand',
  templateUrl: './editbrand.component.html',
  styleUrls: ['./editbrand.component.scss']
})
export class EditbrandComponent {

  show=false
   

 


  onCancel(){
  this.show = !this.show
  }

}
