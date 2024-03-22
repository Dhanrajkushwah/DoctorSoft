import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLabPackageComponent } from './add-lab-package.component';

describe('AddLabPackageComponent', () => {
  let component: AddLabPackageComponent;
  let fixture: ComponentFixture<AddLabPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLabPackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLabPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
