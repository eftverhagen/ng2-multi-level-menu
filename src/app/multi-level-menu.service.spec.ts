import { TestBed, inject } from '@angular/core/testing';

import { MultiLevelMenuService } from './multi-level-menu.service';

describe('MultiLevelMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MultiLevelMenuService]
    });
  });

  it('should be created', inject([MultiLevelMenuService], (service: MultiLevelMenuService) => {
    expect(service).toBeTruthy();
  }));
});
