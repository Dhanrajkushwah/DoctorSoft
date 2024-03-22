import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcashHistoryComponent } from './healthcash-history.component';

describe('HealthcashHistoryComponent', () => {
  let component: HealthcashHistoryComponent;
  let fixture: ComponentFixture<HealthcashHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthcashHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthcashHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
