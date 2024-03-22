import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendCustomEmailComponent } from './send-custom-email.component';

describe('SendCustomEmailComponent', () => {
  let component: SendCustomEmailComponent;
  let fixture: ComponentFixture<SendCustomEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendCustomEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendCustomEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
