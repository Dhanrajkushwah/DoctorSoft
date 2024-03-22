import { Component } from '@angular/core';
interface data {
  value: string;
}

@Component({
  selector: 'app-emailsettings',
  templateUrl: './emailsettings.component.html',
  styleUrls: ['./emailsettings.component.scss']
})
export class EmailsettingsComponent {
  password='password'
  show = false;
  public selectedValue1 = ''
  selectedList1: data[] = [
    {value: 'Choose'},
    {value: 'Encryption'},
  ];
   

 


  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
}
