import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPackageIncludeComponent } from './add-package-include.component';

describe('AddPackageIncludeComponent', () => {
  let component: AddPackageIncludeComponent;
  let fixture: ComponentFixture<AddPackageIncludeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPackageIncludeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPackageIncludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
