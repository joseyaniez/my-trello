import { Component, inject, input } from '@angular/core';
import { Task } from '../../../models/Task';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { TaskDataStore } from '../../../services/task-data-store';

@Component({
  selector: 'app-task-card-item',
  imports: [CdkDrag, CdkDragHandle],
  templateUrl: './task-card-item.html',
  styleUrl: './task-card-item.css',
})
export class TaskCardItem {

  taskService = inject(TaskDataStore);

  content = input.required<Task>();

  deleteTask(): void {
    this.taskService.deleteTask(this.content());
  }

}
