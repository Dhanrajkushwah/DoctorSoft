import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent {
  public routes = routes;
  public selectedValue1 = ''
  public selectedValue2 = '' ;
  public selectedValue3 = '' ;
  public selectedValue4 = '';
  public selectedValue5 = '';
  public selectedValue6 = '';
  public selectedValue7 = '';

  removeClass = true;
  
  removeBtn(){
    this.removeClass = !this.removeClass
  }

 
  selectedList1: data[] = [
    {value: 'Choose Sub Category'},
    {value: 'Fruits'},
  ];
  selectedList2: data[] = [
    {value: 'Percentage'},
    {value: '10%'},
    {value: '20%'},
  ];
  selectedList3: data[] = [
    {value: 'Computers'},
    {value: 'Mac'},
  ];
  selectedList4: data[] = [
    {value: 'None'},
    {value: 'option1'},
  ];
  selectedList5: data[] = [
    {value: 'None'},
    {value: 'option1'},
  ];
  selectedList6: data[] = [
    {value: 'Active'},
    {value: 'Open'},
  ];
  selectedList7: data[] = [
    {value: 'Percentage'},
    {value: '10%'},
    {value: '20%'},
  ];
}
