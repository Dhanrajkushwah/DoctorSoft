import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabPackageComponent } from './lab-package.component';

describe('LabPackageComponent', () => {
  let component: LabPackageComponent;
  let fixture: ComponentFixture<LabPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabPackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
