import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPriscriptionComponent } from './new-priscription.component';

describe('NewPriscriptionComponent', () => {
  let component: NewPriscriptionComponent;
  let fixture: ComponentFixture<NewPriscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPriscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPriscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
