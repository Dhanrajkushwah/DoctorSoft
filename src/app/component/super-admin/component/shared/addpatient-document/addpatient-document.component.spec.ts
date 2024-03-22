import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpatientDocumentComponent } from './addpatient-document.component';

describe('AddpatientDocumentComponent', () => {
  let component: AddpatientDocumentComponent;
  let fixture: ComponentFixture<AddpatientDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpatientDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpatientDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
