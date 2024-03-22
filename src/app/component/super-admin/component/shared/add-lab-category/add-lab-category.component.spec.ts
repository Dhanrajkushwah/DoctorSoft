import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLabCategoryComponent } from './add-lab-category.component';

describe('AddLabCategoryComponent', () => {
  let component: AddLabCategoryComponent;
  let fixture: ComponentFixture<AddLabCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLabCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLabCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
