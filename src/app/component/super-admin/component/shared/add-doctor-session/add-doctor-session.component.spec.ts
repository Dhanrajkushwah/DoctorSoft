import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDoctorSessionComponent } from './add-doctor-session.component';

describe('AddDoctorSessionComponent', () => {
  let component: AddDoctorSessionComponent;
  let fixture: ComponentFixture<AddDoctorSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDoctorSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDoctorSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
