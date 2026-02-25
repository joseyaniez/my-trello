import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TaskDataStore } from '../../services/task-data-store';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
  host: {
    'class': 'flex flex-col items-center w-full'
  }
})
export class TaskForm {

  taskService = inject(TaskDataStore);

  taskContent = new FormControl('');

  saveNewTask(event: Event): void {
    let lastIndex = this.taskService.getLastIdTask();
    if(this.taskContent.value && this.taskContent.value.length > 0){
      this.taskService.setNewTask({
        id: lastIndex + 1,
        description: this.taskContent.value.trim() ?? '',
        status: "pending"
      })
    }
    this.taskContent.setValue('');
  }

}
