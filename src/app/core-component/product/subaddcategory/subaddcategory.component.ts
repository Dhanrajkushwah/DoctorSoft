import { Component } from '@angular/core';
import { routes } from 'src/app/core/core.index';
interface data {
  value: string;
}
@Component({
  selector: 'app-subaddcategory',
  templateUrl: './subaddcategory.component.html',
  styleUrls: ['./subaddcategory.component.scss']
})
export class SubaddcategoryComponent {
  public routes = routes;
  public selectedValue1 = ''

  selectedList1: data[] = [
    {value: 'Choose Sub Category'},
    {value: 'Fruits'},
  ];
   

 

}
