import { TestBed } from '@angular/core/testing';

import { BackendsecurityService } from './backendsecurity.service';

describe('BackendsecurityService', () => {
  let service: BackendsecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendsecurityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
