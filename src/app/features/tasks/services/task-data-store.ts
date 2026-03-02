import { effect, inject, Injectable, linkedSignal, signal } from '@angular/core';
import { Task } from '../models/Task';
import { StorageService } from '../../../shared/services/storage-service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root',
})
export class TaskDataStore {

  private storageService = inject(StorageService);

  private _tasks = signal<Task[]>([]);
  private _pendingTasks = linkedSignal(() => this._tasks().filter(t => t.status == "pending"));
  private _processTasks = linkedSignal(() => this._tasks().filter(t => t.status == "in-process"));
  private _completedTasks = linkedSignal(() => this._tasks().filter(t => t.status == "completed"));

  tasks = this._tasks.asReadonly();
  pendingTasks = this._pendingTasks.asReadonly();
  processTasks = this._processTasks.asReadonly();
  completedTasks = this._completedTasks.asReadonly();

  constructor(){
    this._tasks.set(this.storageService.getItem<Task[]>('tasks')?.reverse() ?? []);

    effect(() => {
      this.storageService.setItem('tasks', this._tasks());
    })
  }


  moveTaskItem(event: CdkDragDrop<Task[]>, status: "pending" | "completed" | "in-process" = "pending"){
    if(event.previousContainer == event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      let idItem = event.item.data;
      this._tasks.update(tArr => tArr.map<Task>(t => {
        if(t.id == idItem){
          return {id: t.id, description: t.description, status: status}
        } else {
          return t
        }
      }))
    }
  }

  getLastIdTask(): number {
    let result = Math.max(...this.tasks().map(t => t.id));
    if (result == -Infinity){
      return 0;
    }
    return result;
  }

  setNewTask(task: Task): void {
    this._tasks.update((taskArr) => [...taskArr, task]);
    this.storageService.setItem('tasks', this.tasks());
  }

  deleteTask(task: Task): void {
    this._tasks.update((taskArr) => taskArr.filter((t) => t.id != task.id))
    this.storageService.setItem('tasks', this._tasks());
  }
}
