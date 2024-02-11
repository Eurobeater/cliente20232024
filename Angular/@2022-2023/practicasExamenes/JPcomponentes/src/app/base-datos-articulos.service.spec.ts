import { TestBed } from '@angular/core/testing';

import { BaseDatosArticulosService } from './base-datos-articulos.service';

describe('BaseDatosArticulosService', () => {
  let service: BaseDatosArticulosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseDatosArticulosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
