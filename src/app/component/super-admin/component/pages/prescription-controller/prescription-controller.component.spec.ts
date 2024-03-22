import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionControllerComponent } from './prescription-controller.component';

describe('PrescriptionControllerComponent', () => {
  let component: PrescriptionControllerComponent;
  let fixture: ComponentFixture<PrescriptionControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriptionControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
