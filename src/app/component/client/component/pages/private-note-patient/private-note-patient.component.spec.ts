import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateNotePatientComponent } from './private-note-patient.component';

describe('PrivateNotePatientComponent', () => {
  let component: PrivateNotePatientComponent;
  let fixture: ComponentFixture<PrivateNotePatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateNotePatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateNotePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
