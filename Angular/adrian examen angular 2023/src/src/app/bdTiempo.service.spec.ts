/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BdTiempoService } from './bdTiempo.service';

describe('Service: BdTiempo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BdTiempoService]
    });
  });

  it('should ...', inject([BdTiempoService], (service: BdTiempoService) => {
    expect(service).toBeTruthy();
  }));
});
