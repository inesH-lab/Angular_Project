import { TestBed } from '@angular/core/testing';

import { ApiLoginInterceptor } from './api-login.interceptor';

describe('ApiLoginInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiLoginInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiLoginInterceptor = TestBed.inject(ApiLoginInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
