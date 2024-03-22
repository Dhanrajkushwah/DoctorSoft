import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSuperadminComponent } from './patient-superadmin.component';

describe('PatientSuperadminComponent', () => {
  let component: PatientSuperadminComponent;
  let fixture: ComponentFixture<PatientSuperadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientSuperadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientSuperadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
