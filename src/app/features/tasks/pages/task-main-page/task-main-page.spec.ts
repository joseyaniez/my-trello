import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskMainPage } from './task-main-page';

describe('TaskMainPage', () => {
  let component: TaskMainPage;
  let fixture: ComponentFixture<TaskMainPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskMainPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskMainPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
