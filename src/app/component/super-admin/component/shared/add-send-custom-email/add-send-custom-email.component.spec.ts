import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSendCustomEmailComponent } from './add-send-custom-email.component';

describe('AddSendCustomEmailComponent', () => {
  let component: AddSendCustomEmailComponent;
  let fixture: ComponentFixture<AddSendCustomEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSendCustomEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSendCustomEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
