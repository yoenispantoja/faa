import { TestBed } from '@angular/core/testing';

import { DemandantesService } from './demandantes.service';

describe('DemandantesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemandantesService = TestBed.get(DemandantesService);
    expect(service).toBeTruthy();
  });
});
