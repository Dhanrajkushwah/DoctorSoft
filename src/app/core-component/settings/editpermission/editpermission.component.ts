import { Component } from '@angular/core';
import { DataService } from 'src/app/core/core.index';
import { Permission } from 'src/app/shared/model/page.model';

@Component({
  selector: 'app-editpermission',
  templateUrl: './editpermission.component.html',
  styleUrls: ['./editpermission.component.scss'],
})
export class EditpermissionComponent {
  public Permission: Permission[] = [];
  public commonSelect = false;
  constructor(private data: DataService) {
    this.data.getEditPermission().subscribe((res) => {
      this.Permission = res.data;
    });
  }

  public selectAll(): void {
    if (this.commonSelect === false) {
      this.Permission.forEach(
        (f: {
          View: boolean;
          Create: boolean;
          Edit: boolean;
          Delete: boolean;
          ViewAllRecords: boolean;
          Barcode: boolean;
          SelectAll: boolean;
        }) => {
          f.View = true;
          f.Create = true;
          f.Edit = true;
          f.Delete = true;
          f.ViewAllRecords = true;
          f.Barcode = true;
          f.SelectAll = true;
        }
      );
    } else if (this.commonSelect === true) {
      this.Permission.forEach(
        (f: {
          View: boolean;
          Create: boolean;
          Edit: boolean;
          Delete: boolean;
          ViewAllRecords: boolean;
          Barcode: boolean;
          SelectAll: boolean;
        }) => {
          f.View = false;
          f.Create = false;
          f.Edit = false;
          f.Delete = false;
          f.ViewAllRecords = false;
          f.Barcode = false;
          f.SelectAll = false;
        }
      );
    }
  }

  public selectOne(editpermission: number, status: boolean): void {
    if (status === false) {
      this.Permission[editpermission].View = true;
      this.Permission[editpermission].Create = true;
      this.Permission[editpermission].Edit = true;
      this.Permission[editpermission].Delete = true;
      this.Permission[editpermission].ViewAllRecords = true;
      this.Permission[editpermission].Barcode = true;
    } else if (status === true) {
      this.Permission[editpermission].View = false;
      this.Permission[editpermission].Create = false;
      this.Permission[editpermission].Edit = false;
      this.Permission[editpermission].Delete = false;
      this.Permission[editpermission].ViewAllRecords = false;
      this.Permission[editpermission].Barcode = false;
    }
  }
}
