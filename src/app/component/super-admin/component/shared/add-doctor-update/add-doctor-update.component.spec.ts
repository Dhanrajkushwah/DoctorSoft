import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDoctorUpdateComponent } from './add-doctor-update.component';

describe('AddDoctorUpdateComponent', () => {
  let component: AddDoctorUpdateComponent;
  let fixture: ComponentFixture<AddDoctorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDoctorUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDoctorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
