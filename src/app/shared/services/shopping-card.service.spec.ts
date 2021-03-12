import { TestBed, inject } from '@angular/core/testing';

import { ShoppingCardService } from 'shared/services/shopping-card.service';

describe('ShoppingCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingCardService]
    });
  });

  it('should be created', inject([ShoppingCardService], (service: ShoppingCardService) => {
    expect(service).toBeTruthy();
  }));
});
