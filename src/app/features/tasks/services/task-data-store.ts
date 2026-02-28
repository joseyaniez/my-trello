import { inject, Injectable } from '@angular/core';
import { Task } from '../models/Task';
import { StorageService } from '../../../shared/services/storage-service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root',
})
export class TaskDataStore {

  private storageService = inject(StorageService);

  private tasks: Task[];

  constructor(){
    let resultTasks = this.storageService.getItem<Task[]>('tasks')?.reverse();
    this.tasks = resultTasks ?? [];
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  moveTaskItem(event: CdkDragDrop<Task[]>){
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  getPendingTasks(): Task[]{
    return this.tasks.filter(t => t.status == "pending");
  }

  getProgressTasks(): Task[]{
    return this.tasks.filter(t => t.status == "in-process");
  }

  getCompletedTasks(): Task[]{
    return this.tasks.filter(t => t.status == "completed");
  }

  getLastIdTask(): number {
    return this.tasks.length ? Math.max(...this.tasks.map(t => t.id)) : 0;
  }

  setNewTask(task: Task): void {
    this.tasks.push(task);
    this.storageService.setItem('tasks', this.tasks);
  }
}
