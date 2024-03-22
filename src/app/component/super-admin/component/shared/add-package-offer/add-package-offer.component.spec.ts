import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPackageOfferComponent } from './add-package-offer.component';

describe('AddPackageOfferComponent', () => {
  let component: AddPackageOfferComponent;
  let fixture: ComponentFixture<AddPackageOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPackageOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPackageOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
