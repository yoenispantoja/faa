import { TestBed } from '@angular/core/testing';

import { IndisciplinasService } from './indisciplinas.service';

describe('IndisciplinasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndisciplinasService = TestBed.get(IndisciplinasService);
    expect(service).toBeTruthy();
  });
});
