import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCardItem } from './task-card-item';

describe('TaskCardItem', () => {
  let component: TaskCardItem;
  let fixture: ComponentFixture<TaskCardItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCardItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskCardItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
