import { TestBed } from '@angular/core/testing';

import { RandomNameAPIService } from './random-name-api.service';

describe('RandomNameAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomNameAPIService = TestBed.get(RandomNameAPIService);
    expect(service).toBeTruthy();
  });
});
