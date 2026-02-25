import { Component } from '@angular/core';
import { TaskForm } from '../../components/task-form/task-form';
import { TaskBoard } from '../../components/task-board/task-board';

@Component({
  selector: 'app-task-main-page',
  imports: [TaskForm, TaskBoard],
  templateUrl: './task-main-page.html',
  styleUrl: './task-main-page.css',
})
export class TaskMainPage {

}
