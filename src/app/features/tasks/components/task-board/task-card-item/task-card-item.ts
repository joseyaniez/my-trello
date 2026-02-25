import { Component, input } from '@angular/core';

@Component({
  selector: 'app-task-card-item',
  imports: [],
  templateUrl: './task-card-item.html',
  styleUrl: './task-card-item.css',
})
export class TaskCardItem {

  content = input.required<string>();

}
