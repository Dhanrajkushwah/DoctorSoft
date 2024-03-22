import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-editstate',
  templateUrl: './editstate.component.html',
  styleUrls: ['./editstate.component.scss']
})
export class EditstateComponent {
  public selectedValue1 = ''
  selectedList1: data[] = [
    {value: 'United Arab Emirates'},
    {value: 'China'},
  ];
   

 

}
