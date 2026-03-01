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
  private pendingTasks: Task[];
  private processTasks: Task[];
  private completedTasks: Task[];

  constructor(){
    this.tasks = this.storageService.getItem<Task[]>('tasks')?.reverse() ?? [];
    this.pendingTasks = this.tasks.filter(t => t.status == "pending");
    this.processTasks = this.tasks.filter(t => t.status == "in-process");
    this.completedTasks = this.tasks.filter(t => t.status == "completed");
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  moveTaskItem(event: CdkDragDrop<Task[]>){
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  getPendingTasks(): Task[]{
    return this.pendingTasks;
  }

  getProcessTasks(): Task[]{
    return this.processTasks;
  }

  getCompletedTasks(): Task[]{
    return this.completedTasks;
  }

  getLastIdTask(): number {
    return this.tasks.length ? Math.max(...this.tasks.map(t => t.id)) : 0;
  }

  setNewTask(task: Task): void {
    this.tasks.push(task);
    this.storageService.setItem('tasks', this.tasks);
  }
}
