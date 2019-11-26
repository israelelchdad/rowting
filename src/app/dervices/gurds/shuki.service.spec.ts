import { TestBed } from '@angular/core/testing';

import { ShukiService } from './shuki.service';

describe('ShukiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShukiService = TestBed.get(ShukiService);
    expect(service).toBeTruthy();
  });
});
