import { TestBed } from '@angular/core/testing';

import { BdCarsService } from './bd-cars.service';

describe('BdCarsService', () => {
  let service: BdCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
