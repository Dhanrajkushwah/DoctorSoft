import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPatientInfoComponent } from './all-patient-info.component';

describe('AllPatientInfoComponent', () => {
  let component: AllPatientInfoComponent;
  let fixture: ComponentFixture<AllPatientInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPatientInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPatientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
