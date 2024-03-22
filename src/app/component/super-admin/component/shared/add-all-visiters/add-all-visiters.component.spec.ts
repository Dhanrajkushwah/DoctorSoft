import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAllVisitersComponent } from './add-all-visiters.component';

describe('AddAllVisitersComponent', () => {
  let component: AddAllVisitersComponent;
  let fixture: ComponentFixture<AddAllVisitersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAllVisitersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAllVisitersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
