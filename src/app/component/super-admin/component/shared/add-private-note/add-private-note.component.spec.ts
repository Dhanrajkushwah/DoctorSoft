import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrivateNoteComponent } from './add-private-note.component';

describe('AddPrivateNoteComponent', () => {
  let component: AddPrivateNoteComponent;
  let fixture: ComponentFixture<AddPrivateNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPrivateNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPrivateNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
