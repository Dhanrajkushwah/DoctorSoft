import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsScheduleComponent } from './sms-schedule.component';

describe('SmsScheduleComponent', () => {
  let component: SmsScheduleComponent;
  let fixture: ComponentFixture<SmsScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
