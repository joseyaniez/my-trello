import { TestBed } from '@angular/core/testing';

import { TaskDataStore } from './task-data-store';

describe('TaskDataStore', () => {
  let service: TaskDataStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskDataStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
