import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecriptionListComponent } from './precription-list.component';

describe('PrecriptionListComponent', () => {
  let component: PrecriptionListComponent;
  let fixture: ComponentFixture<PrecriptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrecriptionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrecriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
