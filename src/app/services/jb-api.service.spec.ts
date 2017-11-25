import { TestBed, inject } from '@angular/core/testing';

import { JbApiService } from './jb-api.service';

describe('JbApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JbApiService]
    });
  });

  it('should be created', inject([JbApiService], (service: JbApiService) => {
    expect(service).toBeTruthy();
  }));
});
