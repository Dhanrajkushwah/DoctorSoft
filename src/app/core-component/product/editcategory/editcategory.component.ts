import { Component } from '@angular/core';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.scss'],
})
export class EditcategoryComponent {
  removeClass = true;

  removeBtn() {
    this.removeClass = !this.removeClass;
  }
}
