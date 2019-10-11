import { TestBed } from '@angular/core/testing';

import { ProductDataServiceService } from './product-data-service.service';

describe('ProductDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductDataServiceService = TestBed.get(ProductDataServiceService);
    expect(service).toBeTruthy();
  });
});
