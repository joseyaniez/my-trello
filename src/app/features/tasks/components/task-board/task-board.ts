import { Component, inject } from '@angular/core';
import { TaskDataStore } from '../../services/task-data-store';
import { TaskCardItem } from './task-card-item/task-card-item';

@Component({
  selector: 'app-task-board',
  imports: [TaskCardItem],
  templateUrl: './task-board.html',
  styleUrl: './task-board.css',
  host: {
    'class': "flex w-2/3 my-15 flex-row justify-center gap-4"
  }
})
export class TaskBoard {
  taskService = inject(TaskDataStore);
}
