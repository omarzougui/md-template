import { TestBed, async, inject } from '@angular/core/testing';

import { GgGuard } from './gg.guard';

describe('GgGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GgGuard]
    });
  });

  it('should ...', inject([GgGuard], (guard: GgGuard) => {
    expect(guard).toBeTruthy();
  }));
});
