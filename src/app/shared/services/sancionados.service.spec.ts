import { TestBed } from '@angular/core/testing';

import { SancionadosService } from './sancionados.service';

describe('SancionadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SancionadosService = TestBed.get(SancionadosService);
    expect(service).toBeTruthy();
  });
});
