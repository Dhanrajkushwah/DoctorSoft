import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-newstate',
  templateUrl: './newstate.component.html',
  styleUrls: ['./newstate.component.scss']
})
export class NewstateComponent {
  public routes = routes;
  public selectedValue1 = ''

  selectedList1: data[] = [
    {value: 'Choose Country'},
    {value: 'China'},
    {value: 'USA'},
  ];
   

 

}
