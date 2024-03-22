import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenratePrescriptionComponent } from './genrate-prescription.component';

describe('GenratePrescriptionComponent', () => {
  let component: GenratePrescriptionComponent;
  let fixture: ComponentFixture<GenratePrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenratePrescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenratePrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
