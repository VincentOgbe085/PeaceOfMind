import { TestBed } from '@angular/core/testing';

import { ProductimageService } from './productimage.service';

describe('ProductimageService', () => {
  let service: ProductimageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductimageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
