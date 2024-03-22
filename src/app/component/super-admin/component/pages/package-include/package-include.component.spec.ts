import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageIncludeComponent } from './package-include.component';

describe('PackageIncludeComponent', () => {
  let component: PackageIncludeComponent;
  let fixture: ComponentFixture<PackageIncludeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageIncludeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageIncludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
