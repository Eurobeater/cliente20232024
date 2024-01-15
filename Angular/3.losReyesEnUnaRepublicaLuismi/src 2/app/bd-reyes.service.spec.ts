import { TestBed } from '@angular/core/testing';

import { BdReyesService } from './bd-reyes.service';

describe('BdReyesService', () => {
  let service: BdReyesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdReyesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
