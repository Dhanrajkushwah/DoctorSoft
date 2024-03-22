import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCalenderComponent } from './new-calender.component';

describe('NewCalenderComponent', () => {
  let component: NewCalenderComponent;
  let fixture: ComponentFixture<NewCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCalenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
