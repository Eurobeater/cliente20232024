import { TestBed } from '@angular/core/testing';

import { ConexionRemotaService } from './conexion-remota.service';

describe('ConexionRemotaService', () => {
  let service: ConexionRemotaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexionRemotaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
