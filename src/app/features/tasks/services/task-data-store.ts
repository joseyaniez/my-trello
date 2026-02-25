import { inject, Injectable } from '@angular/core';
import { Task } from '../models/Task';
import { StorageService } from '../../../shared/services/storage-service';

@Injectable({
  providedIn: 'root',
})
export class TaskDataStore {

  private storageService = inject(StorageService);

  private tasks: Task[];

  constructor(){
    let resultTasks = this.storageService.getItem<Task[]>('tasks');
    this.tasks = resultTasks ?? [];
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  getLastIdTask(): number {
    return this.tasks.length ? Math.max(...this.tasks.map(t => t.id)) : 0;
  }

  setNewTask(task: Task): void {
    this.tasks.push(task);
    this.storageService.setItem('tasks', this.tasks);
  }
}
