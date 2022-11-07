import { TestBed } from '@angular/core/testing';

import { LocaService } from './loca.service';

describe('LocaService', () => {
  let service: LocaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
