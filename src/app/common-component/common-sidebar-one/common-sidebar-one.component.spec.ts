import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSidebarOneComponent } from './common-sidebar-one.component';

describe('CommonSidebarOneComponent', () => {
  let component: CommonSidebarOneComponent;
  let fixture: ComponentFixture<CommonSidebarOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CommonSidebarOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonSidebarOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
