import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpatientProfileComponent } from './allpatient-profile.component';

describe('AllpatientProfileComponent', () => {
  let component: AllpatientProfileComponent;
  let fixture: ComponentFixture<AllpatientProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllpatientProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllpatientProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
