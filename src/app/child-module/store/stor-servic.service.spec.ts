import { TestBed } from '@angular/core/testing';

import { StorServicService } from './stor-servic.service';

describe('StorServicService', () => {
  let service: StorServicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorServicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
