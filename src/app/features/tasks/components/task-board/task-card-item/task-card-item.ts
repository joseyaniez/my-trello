import { Component, input } from '@angular/core';
import { Task } from '../../../models/Task';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-card-item',
  imports: [CdkDrag, CdkDragHandle],
  templateUrl: './task-card-item.html',
  styleUrl: './task-card-item.css',
})
export class TaskCardItem {

  content = input.required<Task>();

}
