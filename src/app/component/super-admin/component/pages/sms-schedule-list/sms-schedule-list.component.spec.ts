import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsScheduleListComponent } from './sms-schedule-list.component';

describe('SmsScheduleListComponent', () => {
  let component: SmsScheduleListComponent;
  let fixture: ComponentFixture<SmsScheduleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsScheduleListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsScheduleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
