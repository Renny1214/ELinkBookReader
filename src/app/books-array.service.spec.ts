import { TestBed } from '@angular/core/testing';

import { BooksArrayService } from './books-array.service';

describe('BooksArrayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BooksArrayService = TestBed.get(BooksArrayService);
    expect(service).toBeTruthy();
  });
});
