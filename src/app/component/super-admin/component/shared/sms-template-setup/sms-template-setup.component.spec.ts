import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsTemplateSetupComponent } from './sms-template-setup.component';

describe('SmsTemplateSetupComponent', () => {
  let component: SmsTemplateSetupComponent;
  let fixture: ComponentFixture<SmsTemplateSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsTemplateSetupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsTemplateSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
