import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-generalsettings',
  templateUrl: './generalsettings.component.html',
  styleUrls: ['./generalsettings.component.scss']
})
export class GeneralsettingsComponent {
  public selectedValue1 = ''
  public selectedValue2 = '' ;
  public selectedValue3 = '' ;


  selectedList1: data[] = [
    {value: 'Choose Time Zone'},
    {value: 'USD Time Zone'},
  ];
  selectedList2: data[] = [
    {value: 'Choose Currency'},
    {value: 'INR'},
    {value: 'USA'},
  ];
  selectedList3: data[] = [
    {value: 'Choose Date Format'},
    {value: 'DD/MM/YYYY'},
    {value: 'MM/DD/YYYY'},
  ];
   

 

}
