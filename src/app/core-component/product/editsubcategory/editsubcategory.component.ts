import { Component } from '@angular/core';
interface data {
  value: string;
}

@Component({
  selector: 'app-editsubcategory',
  templateUrl: './editsubcategory.component.html',
  styleUrls: ['./editsubcategory.component.scss']
})
export class EditsubcategoryComponent {
  public selectedValue1 = ''
  selectedList1: data[] = [
    {value: 'Computers'},
    {value: 'Category'},
  ];
   

 

}
