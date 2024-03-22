import { TestBed } from '@angular/core/testing';

import { NotShowLoginPageGuard } from './not-show-login-page.guard';

describe('NotShowLoginPageGuard', () => {
  let guard: NotShowLoginPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotShowLoginPageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
