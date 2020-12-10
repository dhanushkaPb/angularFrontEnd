import { TestBed } from '@angular/core/testing';

import { GradeClassService } from './grade-class.service';

describe('GradeClassService', () => {
  let service: GradeClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradeClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
