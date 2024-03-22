import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsResetPasswordComponent } from './clients-reset-password.component';

describe('ClientsResetPasswordComponent', () => {
  let component: ClientsResetPasswordComponent;
  let fixture: ComponentFixture<ClientsResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsResetPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
