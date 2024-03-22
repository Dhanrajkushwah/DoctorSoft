import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsTemplateListComponent } from './sms-template-list.component';

describe('SmsTemplateListComponent', () => {
  let component: SmsTemplateListComponent;
  let fixture: ComponentFixture<SmsTemplateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsTemplateListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsTemplateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
