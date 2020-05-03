import { TestBed } from '@angular/core/testing';

import { InformationListService } from './information-list.service';

describe('InformationListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InformationListService = TestBed.get(InformationListService);
    expect(service).toBeTruthy();
  });
});
