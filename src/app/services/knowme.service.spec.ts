import { TestBed } from '@angular/core/testing';

import { KnowmeService } from './knowme.service';

describe('KnowmeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KnowmeService = TestBed.get(KnowmeService);
    expect(service).toBeTruthy();
  });
});
